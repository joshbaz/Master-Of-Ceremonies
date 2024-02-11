import { Stack, Box, Image } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';
import WebNavigation from '../../2-Components/1Navigation/WebNavigation';
import FooterActionM from '../../2-Components/2Footer/FooterActionM';
import HeroBg from '../../1-Assets/Images/herobg.png'
import HeroImage from '../../1-Assets/Images/Hero.png'
import { vCOLORS, vTextStyle } from '../../1-Assets/themes/StyleVariables';
import AOS from 'aos';
import 'aos/dist/aos.css'
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
        <ServiceBenefit></ServiceBenefit>
      </Stack>

      <FooterActionM />
    </Container>
  );
}

export default Home

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
  height: 54vh;
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

