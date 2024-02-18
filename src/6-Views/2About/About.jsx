import { Stack, Image, Box } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import HeroImage from '../../1-Assets/Images/aboutHero.svg'
import FooterActionE from "../../2-Components/2Footer/FooterActionE";
import FooterMain from "../../2-Components/2Footer/FooterMain";
import ABenefitSection from "./ABenefitSection";
import ATeam from "./ATeam";

const About = () => {
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
            className="max-w-[1000px] mx-auto"
          >
            <Stack spacing={"10px"} className="mx-auto items-center">
              <h1
                className="text-[#073845] text-[42px]"
                style={{ fontFamily: vTextStyle.sSemiBold }}
              >
                About Us
              </h1>
              <Box
                className="text-[#9F9B9A] text-[16px] max-w-[660px] text-center"
                style={{ fontFamily: vTextStyle.sRegular }}
              >
                Welcome to Master of Ceremonies UG, where excellence meets
                eloquence in the realm of professional Masters of Ceremonies
                services.
              </Box>
            </Stack>

            <Box className="grid grid-cols-2 gap-[50px] items-center">
              <Box className="w-[500px] h-[400px]">
                <Image className="w-full" src={HeroImage} alt={"hero"} />
              </Box>

              <Stack
                spacing={"10px"}
                className="text-[#696969] text-justify text-[20px] "
                style={{ fontFamily: vTextStyle.sRegular }}
              >
                <Box>
                  At Master of Ceremonies UG, we pride ourselves on being the
                  premier provider of professional Masters of Ceremonies
                  services. With a team of experienced and versatile hosts, we
                  specialise in elevating events across various industries.
                </Box>

                <Box>
                  At the core of Master of Ceremonies UG is a passion for
                  transforming events into unforgettable experiences. We are
                  dedicated to providing top-notch Masters of Ceremonies
                  services that captivate, entertain, and leave a lasting
                  impression on your audience.
                </Box>
              </Stack>
            </Box>
          </Stack>
        </HeroContent>

        <ABenefitSection />

        <ATeam/>

      </Stack>

      <FooterActionE />
      <FooterMain />
    </Container>
  );
};

export default About;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;

const HeroContent = styled.section`
  height: 86vh;
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
