import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { JoinStepperContext } from "../../5-Store/Contexts/JoinUsContext";
import { Formik, Form } from "formik";
import { Stack, Box, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { vTextStyle } from "../../1-Assets/themes/StyleVariables";
import styled from "styled-components";
import * as yup from "yup";

const SkillsForm = ({ innerref, handleStepNext }) => {
  const { skillsData, setSkillsData } = useContext(JoinStepperContext);
    const validationSchema = yup.object().shape({
      hostingStyles: yup.string().required("required"),
      
    });
  return (
    <Formik
      innerRef={innerref}
      initialValues={skillsData}
      validationSchema={validationSchema}
      onSubmit={(values, helpers) => {
        setSkillsData({ ...skillsData, ...values });
        handleStepNext();
      }}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form>
          <Stack>
            <h1
              className="text-[#101828] text-[18px]"
              style={{ fontFamily: vTextStyle.sSemiBold }}
            >
              Fill in this information
            </h1>
            <Stack direction="column" spacing={"20px"}>
              {/** hosting styles */}
              <SingleWrapper>
                <FormContainer className="flex flex-col ">
                  <label>Describe your Hosting Style</label>
                  <input
                    name="hostingStyles"
                    value={values.hostingStyles}
                    onChange={handleChange}
                  />
                </FormContainer>
              </SingleWrapper>

              {/** Qualities */}
              <SingleWrapper>
                <FormContainer className="flex flex-col ">
                  <label>
                    List Unique Qualities or Specialties as an MC (if known)
                  </label>
                  <input
                    name="qualities"
                    value={values.qualities}
                    onChange={handleChange}
                  />
                </FormContainer>
              </SingleWrapper>

              {/**  references */}
              <SingleWrapper>
                <FormContainer className="flex flex-col ">
                  <label>
                    Previous Client Testimonials or References (if available)
                  </label>
                  <input
                    name="references"
                    value={values.references}
                    onChange={handleChange}
                  />
                </FormContainer>
              </SingleWrapper>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default SkillsForm;

const DoubleWrapper = styled(Box)``;
const SingleWrapper = styled(Box)``;
const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 4px;
  label {
    color: #0b4251;
    font-size: 14px;
    font-family: ${vTextStyle.sSemiBold};
  }

  input {
    height: 48px;
    border: 1px solid #0b4251;
    border-radius: 6px;
    font-family: ${vTextStyle.sRegular};
    text-indent: 10px;
  }
`;