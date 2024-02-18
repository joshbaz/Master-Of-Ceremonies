import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { JoinStepperContext } from "../../5-Store/Contexts/JoinUsContext";
import { Formik, Form } from "formik";
import { Stack, Box, CheckboxGroup, Checkbox } from "@chakra-ui/react";
import { vTextStyle } from "../../1-Assets/themes/StyleVariables";
import styled from "styled-components";
import * as yup from "yup";

const AcceptTermsForm = () => {
  return (
    <Stack>
      <h1
        className="text-[#101828] text-[18px]"
        style={{ fontFamily: vTextStyle.sSemiBold }}
      >
        Terms and Conditions
      </h1>
      <Box
        className="text-[#9F9B9A] text-[16px] max-w-[660px] text-center"
        style={{ fontFamily: vTextStyle.sRegular }}
      >
        By submitting this form, you acknowledge that the information provided
        is accurate, and you agree to abide by Master of Ceremonies UG's
        policies and standards. Master of Ceremonies UG reserves the right to
        contact you for further information and may request an audition or
        interview to assess your suitability for our team.
      </Box>
      <Stack direction="column" spacing={"20px"}>
        {/** hosting styles */}
        

        {/** Qualities */}
        
      </Stack>
    </Stack>
  );
};

export default AcceptTermsForm;

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
