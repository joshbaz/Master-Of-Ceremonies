import { Stack, Image, Box } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { SlArrowRight } from "react-icons/sl";
import teamImage from "../../1-Assets/Images/team.svg";

const ATeam = () => {
  return (
    <Container>
      <Stack
        direction="column"
        spacing={"50px"}
        className="mx-auto justify-center h-[100%] items-center max-w-[1000px] lg:py-[70px]"
      >
        <h1
          className="text-[#073845] text-[42px]"
          style={{ fontFamily: vTextStyle.sSemiBold }}
        >
          Meet Our Team of MCs
        </h1>

        <Box className="flex items-center gap-[25px]">
          <Box className="col-span-3">
            <Box className="grid grid-cols-2 gap-[25px] items-center">
              <Stack spacing={"12px"} className="max-w-[399px]">
                <h1
                  className="text-[#1E1E1E] text-[28px]"
                  style={{ fontFamily: vTextStyle.sSemiBold }}
                >
                  [MC Name]
                </h1>
                <p
                  className="text-[#696969] text-[20px] max-w-[660px] text-left"
                  style={{ fontFamily: vTextStyle.sRegular }}
                >
                  With a charismatic presence and a wealth of experience, [MC
                  Name] is a seasoned professional who has hosted a diverse
                  range of events, from corporate conferences to glamorous
                  weddings. Their ability to connect with audiences, coupled
                  with a keen sense of timing, ensures that every moment is
                  perfectly orchestrated.
                </p>
              </Stack>

              <Box className="max-w-[460px]">
                <Image src={teamImage} alt="team" />
              </Box>
            </Box>
          </Box>

          <Box>
            <button
              className="flex items-center justify-center gap-[20px] text-[20px] px-[24px] py-[10px] bg-[#FCEFD1] w-max h-max"
              style={{ fontFamily: vTextStyle.sRegular }}
            >
              <p>Next</p>
              <Box>
                <SlArrowRight size={15} />
              </Box>
            </button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ATeam;

const Container = styled.section`
  min-height: 54vh;
  background: rgb(255, 255, 255);
  background-size: cover;

  .HeroText {
    text-align: center;
    font-family: ${vTextStyle.sRegular};
    font-size: 26px;
    width: 55%;
    color: ${vCOLORS.mButtonLightTxt};
  }
`;
