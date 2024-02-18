import { Stack, Box, Image } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import FooterActionM from "../../2-Components/2Footer/FooterActionM";
import HeroBg from "../../1-Assets/Images/herobg.png";
import HeroImage from "../../1-Assets/Images/Hero.png";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import ideasIcon from "../../1-Assets/icons/ideasIcon.svg";
import engageIcon from "../../1-Assets/icons/EngageIcon.svg";
import memoriesIcon from "../../1-Assets/icons/memoriesIcon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import HServices from "./HServices";
import HMGallery from "./HMGallery";
import FooterMain from "../../2-Components/2Footer/FooterMain";
const Home = () => {
  return (
    <Container spacing={"0"}>
      <WebNavigation />
      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <HeroContent>
          <Stack
            direction="column"
            spacing={"10px"}
            w="100%"
            h="100%"
            alignItems="center"
            pt="10px"
          >
            <Box w="80%" h="79%" style={{ display: "flex" }}>
              <Image src={HeroImage} alt={"hero"} />
            </Box>
            <Box as="Text" className={"HeroText"}>
              We are dedicated to serving through the provision of Professional
              Events emcees.
            </Box>
          </Stack>
        </HeroContent>

        {/** Service Benefit */}
        <ServiceBenefit>
          <Stack
            direction="column"
            spacing={"40px"}
            className="mx-auto justify-center h-[100%] items-center max-w-[1000px] lg:py-[70px]"
          >
            <h1
              className="text-[#EDEBE9] text-[42px]"
              style={{ fontFamily: vTextStyle.sSemiBold }}
            >
              We will help you...
            </h1>

            <Box className="grid lg:grid-cols-3 lg:gap-10">
              <Stack
                className="flex flex-col justify-center items-center"
                spacing={"25px"}
              >
                <Box className="w-[100px] h-[100px]">
                  <Image
                    className="w-[100px] h-[100px]"
                    src={ideasIcon}
                    alt={"ideas"}
                  />
                </Box>
                <Stack spacing={"10px"}>
                  <Box
                    className="text-[#EDEBE9] text-[28px] text-center"
                    style={{ fontFamily: vTextStyle.sSemiBold }}
                  >
                    Bring Events to Life
                  </Box>
                  <Box
                    className="text-[#8A8880] text-[18px] text-center"
                    style={{ fontFamily: vTextStyle.sRegular }}
                  >
                    With lively and vibrant personalities, Be sure that our
                    Emcees will bring life to every stage!
                  </Box>
                </Stack>
              </Stack>
              {/**  engage*/}
              <Stack
                className="flex flex-col justify-center items-center"
                spacing={"25px"}
              >
                <Box className="w-[100px] h-[100px]">
                  <Image
                    className="w-[100px] h-[100px]"
                    src={engageIcon}
                    alt={"ideas"}
                  />
                </Box>
                <Stack spacing={"10px"}>
                  <Box
                    className="text-[#EDEBE9] text-[28px] text-center"
                    style={{ fontFamily: vTextStyle.sSemiBold }}
                  >
                    Engage Audience
                  </Box>
                  <Box
                    className="text-[#8A8880] text-[18px] text-center"
                    style={{ fontFamily: vTextStyle.sRegular }}
                  >
                    Our Emcees always ensures that their audience are constantly
                    intrigued and engaged!
                  </Box>
                </Stack>
              </Stack>
              {/** memories */}
              <Stack
                className="flex flex-col justify-center items-center"
                spacing={"25px"}
              >
                <Box className="w-[100px] h-[100px]">
                  <Image
                    className="w-[100px] h-[100px]"
                    src={memoriesIcon}
                    alt={"ideas"}
                  />
                </Box>
                <Stack spacing={"10px"}>
                  <Box
                    className="text-[#EDEBE9] text-[28px] text-center"
                    style={{ fontFamily: vTextStyle.sSemiBold }}
                  >
                    Lingering Memory
                  </Box>
                  <Box
                    className="text-[#8A8880] text-[18px] text-center"
                    style={{ fontFamily: vTextStyle.sRegular }}
                  >
                    Our Emcees will ensure that people will leave the event with
                    an impression of a lifetime!
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </ServiceBenefit>

        <HServices />
        
        <HMGallery />
      </Stack>

      <FooterActionM />
      <FooterMain />
    </Container>
  );
};

export default Home;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;

const HeroContent = styled.section`
  height: 86vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.989), rgba(0, 0, 0, 0.964)),
    url(${HeroBg});
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

const ServiceBenefit = styled.section`
  min-height: 54vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.989), rgba(0, 0, 0, 0.964)),
    url(${HeroBg});
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
