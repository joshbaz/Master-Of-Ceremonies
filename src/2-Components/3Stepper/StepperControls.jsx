import React, { useEffect, useState } from 'react'
import { vTextStyle } from '../../1-Assets/themes/StyleVariables';
import { SlArrowRight } from 'react-icons/sl';
import { Stack, Image, Box } from "@chakra-ui/react";

const StepperControls = ({
  handleStepNext,
  stepperData,
  currentStep,
  handleStepPrev,
  handleFormSubmit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    let getcurrentIndex =
      currentStep !== null
        ? stepperData.findIndex((data) => data?.title === currentStep)
        : null;
    setCurrentIndex(() => getcurrentIndex);
    // console.log('current', getcurrentIndex)
    return () => {
      //second
    };
  }, [currentStep]);
  return (
    <div className="container flex justify-around mt-4 mb-8 gap-[20px]">
      {/** back button */}
      <button
        disabled={currentIndex === null || currentIndex + 1 == 1 ? true : false}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currentIndex === null || currentIndex + 1 == 1
            ? "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-slate-400"
            : ""
        }`}
        style={{ fontFamily: vTextStyle.sSemiBold }}
        onClick={handleStepPrev}
      >
        back
      </button>
      {/** next button */}
      <button
        className="flex items-center gap-[3px] bg-[#FCEFD1] text-[#0B4251] uppercase py-2 px-4 rounded cursor-pointer border-2 border-[#FCEFD1] hover:bg-slate-700 hover:border-[#0B4251] hover:text-white transition duration-200 ease-in-out"
        style={{ fontFamily: vTextStyle.sSemiBold }}
        onClick={handleFormSubmit}
      >
        <p>Next</p>
        <Box>
          <SlArrowRight size={10.5} />
        </Box>
      </button>
    </div>
  );
};

export default StepperControls