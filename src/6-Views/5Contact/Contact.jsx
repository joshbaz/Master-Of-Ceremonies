import { Stack, Image, Box } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import FooterActionM from "../../2-Components/2Footer/FooterActionM";
import FooterMain from "../../2-Components/2Footer/FooterMain";
import whatsappImage from "../../1-Assets/Images/whatsapp.svg";

const Contact = () => {
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
                Contact Us
              </h1>
              <Box
                className="text-[#9F9B9A] text-[16px] max-w-[660px] text-center"
                style={{ fontFamily: vTextStyle.sRegular }}
              >
                Contact us today to discuss how our professional Masters of
                Ceremonies services can elevate your next event to new heights.
              </Box>
            </Stack>

            <Stack spacing={"16px"}>
              {" "}
              <Stack spacing={"16px"}>
                <Box className="flex text-[#000000] gap-[16px] items-center">
                  <Box
                    className="text-[20px]"
                    style={{ fontFamily: vTextStyle.sSemiBold }}
                  >
                    Email:
                  </Box>
                  <p
                    className="text-[20px]"
                    style={{ fontFamily: vTextStyle.sRegular }}
                  >
                    theartistry360@gmail.com
                  </p>
                </Box>
                <Box className="flex text-[#000000] gap-[16px]">
                  <Box
                    className="text-[20px]"
                    style={{ fontFamily: vTextStyle.sSemiBold }}
                  >
                    Mobile Phone:
                  </Box>
                  <p
                    className="text-[20px]"
                    style={{ fontFamily: vTextStyle.sRegular }}
                  >
                    +256 705 581001
                  </p>
                </Box>
              </Stack>
              <Box>
                <Image src={whatsappImage} alt="call to action" />
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

export default Contact;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;

const HeroContent = styled.section`
  height: 76vh;
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
