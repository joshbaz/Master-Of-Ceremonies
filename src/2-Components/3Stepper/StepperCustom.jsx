import React, { useEffect, useState } from "react";
import "./Stepper.css";
import { vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { GiCheckMark } from "react-icons/gi";

const StepperCustom = ({ stepperData, currentStep, stepsAllComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    let getcurrentIndex =
      currentStep !== null
        ? stepperData.findIndex((data) => data?.title === currentStep)
        : null;
    setCurrentIndex(() => getcurrentIndex);

    return () => {
      //second
    };
  }, [currentStep]);

  return (
    <div className="flex flex-col h-[80%] w-full ml-7 relative ">
      {stepperData?.map((step, i) => {
        return (
          <div
            key={i}
            className={`flex step-item ${
              currentStep === step?.title && "active"
            } ${
              i + 1 < currentIndex + 1 || stepsAllComplete ? "complete" : ""
            }`}
          >
            <div className="step">
              <div className="outerStep">
                {i + 1 < currentIndex + 1 || stepsAllComplete ? (
                  <GiCheckMark size={13} />
                ) : (
                  <div className="innerStep"></div>
                )}
              </div>
            </div>
            <div
              className="text-[#B2B7BF] text-[18px] px-[20px] title"
              style={{ fontFamily: vTextStyle.sSemiBold }}
            >
              {step.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepperCustom;
