import { Stack, Image, Box } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import FooterActionM from "../../2-Components/2Footer/FooterActionM";
import FooterMain from "../../2-Components/2Footer/FooterMain";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import wedsEvent from "../../1-Assets/Images/weeding-social.svg";
import publicEvent from "../../1-Assets/Images/public-comm.svg";
import coporateEvents from '../../1-Assets/Images/corporateEvents.svg'

const Services = () => {
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
                Portfolio of Services
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

            <Stack spacing={'40px'}>
              <Box className="grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                <Box className="w-[500px] h-[400px]">
                  <Image className="w-full" src={wedsEvent} alt={"hero"} />
                </Box>

                <Stack spacing={"10px"}>
                  <h1
                    className="text-[#093D4C] text-[32px]"
                    style={{ fontFamily: vTextStyle.sSemiBold }}
                  >
                    Weddings & Social Events
                  </h1>
                  <p
                    className="text-[#696969] text-[20px] text-justify"
                    style={{ fontFamily: vTextStyle.sRegular }}
                  >
                    Celebrate love and life's special moments with our
                    charismatic MCs. We add a touch of charm and elegance to
                    weddings, anniversaries, and other social occasions,
                    ensuring that your event is as unique as your love story.
                  </p>
                </Stack>
              </Box>
              {/** public */}
              <Box className="grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                <Stack spacing={"10px"}>
                  <h1
                    className="text-[#093D4C] text-[32px]"
                    style={{ fontFamily: vTextStyle.sSemiBold }}
                  >
                    Public & Community Events
                  </h1>
                  <p
                    className="text-[#696969] text-[20px] text-justify"
                    style={{ fontFamily: vTextStyle.sRegular }}
                  >
                    From grand openings to community festivals, our MCs know how
                    to captivate diverse audiences. They bring enthusiasm and a
                    polished presence to public events, creating an atmosphere
                    of excitement and unity.
                  </p>
                </Stack>

                <Box className="w-[500px] h-[400px]">
                  <Image className="w-full" src={publicEvent} alt={"hero"} />
                </Box>
              </Box>
              {/** corporate */}
              <Box className="grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                <Box className="w-[500px] h-[400px]">
                  <Image className="w-full" src={coporateEvents} alt={"hero"} />
                </Box>

                <Stack spacing={"10px"}>
                  <h1
                    className="text-[#093D4C] text-[32px]"
                    style={{ fontFamily: vTextStyle.sSemiBold }}
                  >
                    Corporate Events
                  </h1>
                  <p
                    className="text-[#696969] text-[20px] text-justify"
                    style={{ fontFamily: vTextStyle.sRegular }}
                  >
                    Our MCs bring professionalism and energy to corporate
                    gatherings, conferences, and seminars. Whether it's a
                    product launch, awards ceremony, or a team-building event,
                    we ensure a seamless flow that captivates and engages your
                    audience.
                  </p>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </HeroContent>
      </Stack>
      <FooterActionM />
      <FooterMain />
    </Container>
  );
};

export default Services;

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
