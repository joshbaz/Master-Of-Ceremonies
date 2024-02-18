import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { JoinStepperContext } from "../../5-Store/Contexts/JoinUsContext";
import { Formik, Form } from "formik";
import { Stack, Box, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { vTextStyle } from "../../1-Assets/themes/StyleVariables";
import styled from "styled-components";
import * as yup from "yup";

const CommitmentForm = ({ innerref, handleStepNext }) => {
  const { commitmentData, setCommitmentData } = useContext(JoinStepperContext);
   const validationSchema = yup.object().shape({
     timeAvailable: yup.array().required("required"),
   });
  
   const timeOptions = [
     { key: "Weekdays", value: "Weekdays" },
     { key: "Weekends", value: "Weekends" },
     { key: "Both", value: "Both" },
    
   ];
  
    const travelOptions = [
      { key: "Local Events Only", value: "Local Events Only" },
      {
        key: "Willing to Travel Regionally",
        value: "Willing to Travel Regionally",
      },
      {
        key: "Willing to Travel Nationally",
        value: "Willing to Travel Nationally",
      },
      
    ];

    const commitmentOptions = [
      {
        key: "Willing to Attend Rehearsals",
        value: "Willing to Attend Rehearsals",
      },
      {
        key: "Dedication to Event Briefing and Preparation",
        value: "Dedication to Event Briefing and Preparation",
      },
     
    ];
  return (
    <Formik
      innerRef={innerref}
      initialValues={commitmentData}
      validationSchema={validationSchema}
      onSubmit={(values, helpers) => {
        setCommitmentData({ ...commitmentData, ...values });
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
              {/** type of events */}
              <SingleWrapper className="flex w-full items-center gap-[20px]">
                <FormContainer className="flex flex-col ">
                  <label>Availability for Events</label>
                  <CheckboxGroup
                    name="timeAvailable"
                    value={values.timeAvailable}
                    onChange={(e) => {
                      setFieldValue("timeAvailable", e);
                    }}
                    colorScheme="blue"
                  >
                    <Stack spacing={"10px"}>
                      {timeOptions?.map((data, i) => {
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

              {/** travelAvailable */}
              <SingleWrapper className="flex w-full items-center gap-[20px]">
                <FormContainer className="flex flex-col ">
                  <label>Travel Availability</label>
                  <CheckboxGroup
                    name="travelAvailable"
                    value={values.travelAvailable}
                    onChange={(e) => {
                      setFieldValue("travelAvailable", e);
                    }}
                    colorScheme="blue"
                  >
                    <Stack spacing={"10px"}>
                      {travelOptions?.map((data, i) => {
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

              {/** commitment */}
              <SingleWrapper className="flex w-full items-center gap-[20px]">
                <FormContainer className="flex flex-col ">
                  <label>Commitment to Preparation</label>
                  <CheckboxGroup
                    name="commitment"
                    value={values.commitment}
                    onChange={(e) => {
                      setFieldValue("commitment", e);
                    }}
                    colorScheme="blue"
                  >
                    <Stack spacing={"10px"}>
                      {commitmentOptions?.map((data, i) => {
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
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default CommitmentForm;

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

