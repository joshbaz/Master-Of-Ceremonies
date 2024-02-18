import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { Stack, Box, Image } from "@chakra-ui/react";
import wedsEvent from "../../1-Assets/Images/weeding-social.svg";
import publicEvent from "../../1-Assets/Images/public-comm.svg";

const HServices = () => {
  return (
    <ServiceOffered>
      <Stack
        direction="column"
        spacing={"40px"}
        className="mx-auto justify-center h-[100%] items-center max-w-[1000px] lg:py-[70px]"
      >
        <h1
          className="text-[#073845] text-[42px]"
          style={{ fontFamily: vTextStyle.sSemiBold }}
        >
          Our Emceeing Services...
        </h1>

        <Stack spacing={"50px"}>
          {/** wedding & social events */}
          <Box className="grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <Box className="w-[500px]">
              <Image src={wedsEvent} alt={"ideas"} />
            </Box>
            <Stack spacing={"22px"}>
              <Stack spacing={"10px"}>
                <h1
                  className="text-[#093D4C] text-[32px]"
                  style={{ fontFamily: vTextStyle.sSemiBold }}
                >
                  Weddings & Social Events
                </h1>
                <p
                  className="text-[#093D4C] text-[20px] text-justify"
                  style={{ fontFamily: vTextStyle.sRegular }}
                >
                  Celebrate love and life's special moments with our charismatic
                  MCs. We add a touch of charm and elegance to weddings,
                  anniversaries, and other social occasions, ensuring that your
                  event is as unique as your love story.
                </p>
              </Stack>

              <button
                className="bg-[#FCEFD1] text-[#093D4C] py-[13px] px-[24px] w-max"
                style={{ fontFamily: vTextStyle.sBold }}
              >
                Learn more
              </button>
            </Stack>
          </Box>
          {/** public & community events */}
          <Box className="grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <Stack spacing={"22px"}>
              <Stack spacing={"10px"}>
                <h1
                  className="text-[#093D4C] text-[32px]"
                  style={{ fontFamily: vTextStyle.sSemiBold }}
                >
                  Public & Community Events
                </h1>
                <p
                  className="text-[#093D4C] text-[20px] text-justify"
                  style={{ fontFamily: vTextStyle.sRegular }}
                >
                  We have a team of professional masters of ceremonies and
                  Public speakers suited for all your events needs; be
                  it introduction, Pre intro, Social, Corporate or Religious.
                </p>
              </Stack>

              <button
                className="bg-[#FCEFD1] text-[#093D4C] py-[13px] px-[24px] w-max"
                style={{ fontFamily: vTextStyle.sBold }}
              >
                Learn more
              </button>
            </Stack>
            <Box>
              <Image
                className="w-[100px] h-[100px]"
                src={publicEvent}
                alt={"ideas"}
              />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </ServiceOffered>
  );
};

export default HServices;

const ServiceOffered = styled.section`
  min-height: 54vh;
  background: rgb(255, 255, 255);
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
