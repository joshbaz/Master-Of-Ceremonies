import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { JoinStepperContext } from '../../5-Store/Contexts/JoinUsContext'
import { Formik, Form } from 'formik'
import { Stack, Box } from '@chakra-ui/react'
import { vTextStyle } from '../../1-Assets/themes/StyleVariables';
import styled from 'styled-components';
import * as yup from 'yup'

const PersonalForm = ({ innerref, handleStepNext }) => {
  
    
    const { personalData, setPersonalData } = useContext(JoinStepperContext);
    

  const validationSchema = yup.object().shape({
    firstname: yup.string().required("required"),
    lastname: yup.string().required("required"),
    mobilenumber: yup.string().required("required"),
    email: yup.string().required("required"),
    city: yup.string().required("required"),
    district: yup.string().required("required"),
  });
    
    useEffect(() => {
      
   // setInitialValues(() => ({ ...initialValues, ...personalData }));
      return () => {
        
      }
    }, [])
    

  return (
    <Formik
      innerRef={innerref}
      initialValues={personalData}
      validationSchema={validationSchema}
      onSubmit={(values, helpers) => {
        setPersonalData({ ...personalData, ...values });
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
              {/** names */}
              <DoubleWrapper className="flex w-full h-max  gap-[20px]">
                <FormContainer className="flex flex-col h-full">
                  <label>First Name</label>
                  <input
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                  />
                  {errors && errors.firstname ? (
                    <p
                      className="text-red-600 text-[15px]"
                      style={{ fontFamily: vTextStyle.sRegular }}
                    >
                      {errors.firstname}
                    </p>
                  ) : null}
                </FormContainer>

                <FormContainer>
                  <label>Last Name</label>
                  <input
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                  />
                  {errors && errors.lastname ? (
                    <p
                      className="text-red-600 text-[15px]"
                      style={{ fontFamily: vTextStyle.sRegular }}
                    >
                      {errors.lastname}
                    </p>
                  ) : null}
                </FormContainer>
              </DoubleWrapper>
              {/** profile */}
              <SingleWrapper>
                <FormContainer className="flex flex-col ">
                  <label>LinkedIn Profile (if applicable)</label>
                  <input
                    name="linkedprofile"
                    value={values.linkedprofile}
                    onChange={handleChange}
                  />
                </FormContainer>
              </SingleWrapper>

              {/** numbers */}
              <DoubleWrapper className="flex w-full items-center gap-[20px]">
                <FormContainer className="flex flex-col ">
                  <label>Mobile Number</label>
                  <input
                    name="mobilenumber"
                    value={values.mobilenumber}
                    onChange={handleChange}
                  />
                  {errors && errors.mobilenumber ? (
                    <p
                      className="text-red-600 text-[15px]"
                      style={{ fontFamily: vTextStyle.sRegular }}
                    >
                      {errors.mobilenumber}
                    </p>
                  ) : null}
                </FormContainer>

                <FormContainer>
                  <label>Secondary Mobile Number(if applicable)</label>
                  <input
                    name="secondarynumber"
                    value={values.secondarynumber}
                    onChange={handleChange}
                  />
                </FormContainer>
              </DoubleWrapper>

              {/** email */}
              <SingleWrapper>
                <FormContainer className="flex flex-col ">
                  <label>Email</label>
                  <input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors && errors.email ? (
                    <p
                      className="text-red-600 text-[15px]"
                      style={{ fontFamily: vTextStyle.sRegular }}
                    >
                      {errors.email}
                    </p>
                  ) : null}
                </FormContainer>
              </SingleWrapper>

              {/** City and district */}
              <DoubleWrapper className="flex w-full  gap-[20px]">
                <FormContainer className="flex flex-col ">
                  <label>City</label>
                  <input
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                  />
                  {errors && errors.city ? (
                    <p
                      className="text-red-600 text-[15px]"
                      style={{ fontFamily: vTextStyle.sRegular }}
                    >
                      {errors.city}
                    </p>
                  ) : null}
                </FormContainer>

                <FormContainer>
                  <label>District</label>
                  <input
                    name="district"
                    value={values.district}
                    onChange={handleChange}
                  />
                  {errors && errors.district ? (
                    <p
                      className="text-red-600 text-[15px]"
                      style={{ fontFamily: vTextStyle.sRegular }}
                    >
                      {errors.district}
                    </p>
                  ) : null}
                </FormContainer>
              </DoubleWrapper>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalForm

const DoubleWrapper = styled(Box)`

`
const SingleWrapper = styled(Box)``;
const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height:100%;
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