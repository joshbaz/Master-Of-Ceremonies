import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { JoinStepperContext } from "../../5-Store/Contexts/JoinUsContext";
import { Formik, Form } from "formik";
import { Stack, Box, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { vTextStyle } from "../../1-Assets/themes/StyleVariables";
import styled from "styled-components";
import * as yup from "yup";

const BackgroundForms = ({ innerref, handleStepNext }) => {
    const { backgroundData, setBackgroundData } =
    useContext(JoinStepperContext);
  
   const validationSchema = yup.object().shape({
     experience: yup.string().required("required"),
     eventsHosted: yup.array().required('required')
     
   });
  const eventOptions = [
    { key: "Corporate Events", value: "Corporate Events" },
    { key: "Pre-Weddings", value: "Pre-Weddings" },
    { key: "Weddings", value: "Weddings" },
    { key: "Social Gatherings", value: "Social Gatherings" },
    { key: "Conferences", value: "Conferences" },
    { key: "others", value: "others" },
  ];

   const languageOptions = [
     { key: "English", value: "English" },
     { key: "Swahili", value: "Swahili" },
     { key: "Ganda", value: "Ganda" },
     { key: "ruNyankore", value: "ruNyankore" },
     { key: "ruTooro", value: "ruTooro" },
     { key: "Karamojong", value: "Karamojong" },
     { key: "Teso", value: "Teso" },
     { key: "Kakwa", value: "kakwa" },
     { key: "others", value: "others" },
   ];


  return (
    <Formik
      innerRef={innerref}
      initialValues={backgroundData}
      validationSchema={validationSchema}
      onSubmit={(values, helpers) => {
        setBackgroundData({ ...backgroundData, ...values });
        handleStepNext();
      }}
    >
      {({ values, handleChange, errors, touched, setFieldValue }) => (
        <Form>
          <Stack>
            <h1
              className="text-[#101828] text-[18px]"
              style={{ fontFamily: vTextStyle.sSemiBold }}
            >
              Fill in this information
            </h1>
            <Stack direction="column" spacing={"20px"}>
              {/** experience */}
              <SingleWrapper>
                <FormContainer className="flex flex-col ">
                  <label>Years of Experience as an MC</label>
                  <input
                    name="experience"
                    value={values.experience}
                    onChange={handleChange}
                  />
                  {errors && errors.experience ? (
                    <p
                      className="text-red-600 text-[15px]"
                      style={{ fontFamily: vTextStyle.sRegular }}
                    >
                      {errors.experience}
                    </p>
                  ) : null}
                </FormContainer>
              </SingleWrapper>

              {/** type of events */}
              <SingleWrapper className="flex w-full items-center gap-[20px]">
                <FormContainer className="flex flex-col ">
                  <label>Type of Events Hosted</label>
                  <CheckboxGroup
                    name="eventsHosted"
                    value={values.eventsHosted}
                    onChange={(e) => {
                      setFieldValue("eventsHosted", e);
                    }}
                    colorScheme="blue"
                  >
                    <Stack spacing={"10px"}>
                      {eventOptions?.map((data, i) => {
                        return (
                          <Checkbox key={i} value={data.value}>
                            {data.value}
                          </Checkbox>
                        );
                      })}
                    </Stack>
                  </CheckboxGroup>
                  {errors && errors.eventsHosted ? (
                    <p
                      className="text-red-600 text-[15px]"
                      style={{ fontFamily: vTextStyle.sRegular }}
                    >
                      {errors.eventsHosted}
                    </p>
                  ) : null}
                </FormContainer>
              </SingleWrapper>

              {/** other events */}
              <SingleWrapper>
                <FormContainer className="flex flex-col ">
                  <label>If you select “Other” please specify</label>
                  <input
                    name="otherEvents"
                    value={values.otherEvents}
                    onChange={handleChange}
                  />
                </FormContainer>
              </SingleWrapper>

              {/** languages spoken */}
              <SingleWrapper className="flex w-full items-center gap-[20px]">
                <FormContainer className="flex flex-col ">
                  <label>Languages Spoken</label>
                  <CheckboxGroup
                    name="languagesSpoken"
                    value={values.languagesSpoken}
                    onChange={(e) => {
                      setFieldValue("languagesSpoken", e);
                    }}
                    colorScheme="blue"
                  >
                    <Stack spacing={"10px"}>
                      {languageOptions?.map((data, i) => {
                        return (
                          <Checkbox key={i} value={data.value}>
                            {data.value}
                          </Checkbox>
                        );
                      })}
                    </Stack>
                  </CheckboxGroup>
                </FormContainer>
              </SingleWrapper>

              {/** other events */}
              <SingleWrapper>
                <FormContainer className="flex flex-col ">
                  <label>If you select “Other” please specify</label>
                  <input
                    name="otherLanguages"
                    value={values.otherLanguages}
                    onChange={handleChange}
                  />
                </FormContainer>
              </SingleWrapper>
              {/** upload resume */}
              {/** City and district */}
              <SingleWrapper>
                <FormContainer className="flex flex-col ">
                  <label>Link to Video or Audio Samples (if available)</label>
                  <input
                    name="samplelink"
                    value={values.samplelink}
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

export default BackgroundForms;

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
