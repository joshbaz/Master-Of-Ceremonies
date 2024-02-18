import { Stack, Image, Box, Stepper } from "@chakra-ui/react";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import FooterActionM from "../../2-Components/2Footer/FooterActionM";
import StepperControls from "../../2-Components/3Stepper/StepperControls";
import StepperCustom from "../../2-Components/3Stepper/StepperCustom";
import { JoinStepperContext } from "../../5-Store/Contexts/JoinUsContext";
import PersonalForm from "./PersonalForm";

import SkillsForm from "./SkillsForm";
import CommitmentForm from "./CommitmentForm";
import MoreInfoForm from "./MoreInfoForm";
import AcceptTermsForm from "./AcceptTermsForm";
import BackgroundForms from "./BackgroundForms";


const ApplicationUpload = () => {
  const stepperArray = [
    { title: "Personal Info" },
    { title: "Professional Background" },
    { title: "Skills&Qualities" },
    { title: "Availability&Commitment" },
    { title: "Additional Info" },
  ];
  const [currentStep, setCurrentStep] = useState(null);
//  const [currentIndexes, setCurrentIndexes] = useState(0);
  const [stepsAllComplete, setStepsAllComplete] = useState(false);
  const [personalData, setPersonalData] = useState({
    firstname: "",
    lastname: "",
    linkedprofile: "",
    mobilenumber: "",
    secondarynumber: "",
    email: "",
    city: "",
    district: "",
  });
  const [backgroundData, setBackgroundData] = useState({
    experience: "",
    eventsHosted: [],
    otherEvents: "",
    languagesSpoken: [],
    otherLanguages: "",
    resume: null,
samplelink: ""
  })
  const [skillsData, setSkillsData] = useState({
    hostingStyles: "",
    qualities: "",
    references: "",
  });
  const [commitmentData, setCommitmentData] = useState({
    timeAvailable: [],
    travelAvailable: [],
    commitment: []
  })
  const [moreInfoData, setMoreInfoData] = useState({
    reasonToJoin: "",
    shareMore: ""
  });
  const formRef = useRef();

  useEffect(() => {
    setCurrentStep(() => stepperArray?.[0].title);

    return () => {
      //second
    };
  }, []);

  const handleFormSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit()
    }
  }

  /** handle next step */
  const handleStepNext = () => {
    let getcurrentIndex =
      currentStep !== null
        ? stepperArray.findIndex((data) => data?.title === currentStep)
        : null;
    console.log("All steps", getcurrentIndex);
    if (
      getcurrentIndex !== null &&
      getcurrentIndex + 1 < stepperArray?.length
    ) {
      let nextCurrentIndex = getcurrentIndex + 1;

      if (nextCurrentIndex < stepperArray?.length) {
        console.log("next-btn", stepperArray?.length, nextCurrentIndex);
        setCurrentStep(() => stepperArray?.[nextCurrentIndex].title);
      }
    } else if (getcurrentIndex + 1 === stepperArray?.length) {
      setStepsAllComplete(() => true);
    }
  };

  /** handle prev step */
  const handleStepPrev = () => {
    let getcurrentIndex =
      currentStep !== null
        ? stepperArray.findIndex((data) => data?.title === currentStep)
        : null;
    
    if (getcurrentIndex !== null && getcurrentIndex > 0) {
      let prevCurrentIndex = getcurrentIndex - 1;
     // alert(prevCurrentIndex);

      setCurrentStep(() => stepperArray?.[prevCurrentIndex].title);
      if (stepsAllComplete) {
        setStepsAllComplete(() => false);
      }
    }
  };

  const FormDisplay = (step) => {
    switch (step) {
      case "Personal Info":
        return (
          <PersonalForm innerref={formRef} handleStepNext={handleStepNext} />
        );
      case "Professional Background":
        return (
        
          <BackgroundForms innerref={formRef} handleStepNext={handleStepNext} />
         
        );
      case "Skills&Qualities":
        return (
          <SkillsForm innerref={formRef} handleStepNext={handleStepNext} />
        );
      case "Availability&Commitment":
        return (
          <CommitmentForm innerref={formRef} handleStepNext={handleStepNext} />
        );
      case "Additional Info":
        return (
          <MoreInfoForm innerref={formRef} handleStepNext={handleStepNext} />
        );
      case "Complete":
       return (<AcceptTermsForm innerref={formRef} />)
      default: 
        return null
    }
  }

  return (
    <Container spacing={"0"}>
      <WebNavigation sectionbg={"white"} />

      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <HeroContent>
          <Stack
            direction="column"
            spacing={"30px"}
            w="100%"
            h="100%"
            alignItems="center"
            pt="10px"
            pb="116px"
            className="max-w-[1000px] mx-auto"
          >
            <Stack spacing={"10px"} className="mx-auto items-center">
              <h1
                className="text-[#073845] text-[42px]"
                style={{ fontFamily: vTextStyle.sSemiBold }}
              >
                Join Us
              </h1>
              <Box
                className="text-[#9F9B9A] text-[16px] max-w-[660px] text-center"
                style={{ fontFamily: vTextStyle.sRegular }}
              >
                Thank you for your interest in joining Master of Ceremonies UG
                as a Professional Master of Ceremonies (MC). We are excited to
                discover talented individuals who share our passion for
                elevating events to new heights. Please complete the following
                form to be considered for our MC team.
              </Box>
            </Stack>
            {/** forms */}

            <Box className="flex w-full  gap-[43px]">
              {/** stepper */}
              <Box className="w-[350px] h-[450px] bg-[#ffffff] drop-shadow-lg flex items-center">
                <StepperCustom
                  stepperData={stepperArray}
                  currentStep={currentStep}
                  stepsAllComplete={stepsAllComplete}
                />
              </Box>

              {/** forms && controls*/}
              <Box className="w-full">
                {/** forms */}
                <Box>
                  <JoinStepperContext.Provider
                    value={{
                      personalData,
                      setPersonalData,
                      backgroundData,
                      setBackgroundData,
                      skillsData,
                      setSkillsData,
                      commitmentData,
                      setCommitmentData,
                      moreInfoData,
                      setMoreInfoData,
                    }}
                  >
                    {FormDisplay(stepsAllComplete ? "Complete" : currentStep)}
                  </JoinStepperContext.Provider>
                </Box>
                {/** stepper controls */}
                <Box className="w-full flex justify-end">
                  <Box className="w-max">
                    <StepperControls
                      handleStepNext={handleStepNext}
                      stepperData={stepperArray}
                      currentStep={currentStep}
                      handleStepPrev={handleStepPrev}
                      handleFormSubmit={handleFormSubmit}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </HeroContent>
      </Stack>
    </Container>
  );
};

export default ApplicationUpload;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;

const HeroContent = styled.section`
  min-height: 86vh;
  background: #ffffff;
  background-size: cover;

  img {
    width: 100%;
    height: 100%;
  }

  .HeroText {
    text-align: center;
    font-family: ${vTextStyle.sRegular};
    font-size: 26px;
    width: 55%;
    color: ${vCOLORS.mButtonLightTxt};
  }
`;
