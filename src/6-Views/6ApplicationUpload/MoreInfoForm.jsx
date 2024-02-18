import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { JoinStepperContext } from "../../5-Store/Contexts/JoinUsContext";
import { Formik, Form } from "formik";
import { Stack, Box, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { vTextStyle } from "../../1-Assets/themes/StyleVariables";
import styled from "styled-components";
import * as yup from "yup";

const MoreInfoForm = ({ innerref, handleStepNext }) => {
  const { moreInfoData, setMoreInfoData } = useContext(JoinStepperContext);
  const validationSchema = yup.object().shape({
    reasonToJoin: yup.string().required("required"),
  });
  return (
    <Formik
      innerRef={innerref}
      initialValues={moreInfoData}
      validationSchema={validationSchema}
      onSubmit={(values, helpers) => {
        setMoreInfoData({ ...moreInfoData, ...values });
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
                  <label>
                    Why do you want to join Master of Ceremonies UG as an MC?{" "}
                  </label>
                  <input
                    name="reasonToJoin"
                    value={values.reasonToJoin}
                    onChange={handleChange}
                  />
                </FormContainer>
              </SingleWrapper>

              {/** Qualities */}
              <SingleWrapper>
                <FormContainer className="flex flex-col ">
                  <label>
                    Anything else you'd like to share or highlight about your MC
                    experience
                  </label>
                  <input
                    name="shareMore"
                    value={values.shareMore}
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

export default MoreInfoForm;

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
