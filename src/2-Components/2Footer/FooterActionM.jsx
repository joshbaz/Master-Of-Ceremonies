import { Stack, Box, Image } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import FooterImage1 from "../../1-Assets/Images/footerImage1.png";
const FooterActionM = () => {
  return (
    <Container>
      <Stack direction="row" h="100%" spacing={'71px'}>
        <Box w="50%">
          <Image src={FooterImage1} alt={"Footer background"} />
        </Box>
        <Box w="50%" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <Stack
            direction="column"
            spacing={"20px"}
            justifyContent="center"
            h="100%"
            w="80%"
          >
            <Stack spacing={"10px"}>
              <Box as="text" className="title">
                Make It Memorable...
              </Box>
              <Box as="text" className="subtitle">
                Where excellence meets eloquence in the realm of professional
                Masters of Ceremonies services
              </Box>
            </Stack>

            {/** Get Started Button */}
            <StartButton as="button">Get Started</StartButton>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default FooterActionM;

const Container = styled.footer`
  width: 100vw;
  height: 338px;
  background-color: ${vCOLORS.darkBg};
  padding: 0 148px;
  color: white;

  img {
    height: 100%;
  }

  .title {
    font-family: ${vTextStyle.sSemiBold};
    font-size: 30px;
    color: ${vCOLORS.footerColor};
  }

  .subtitle {
    font-family: ${vTextStyle.sRegular};
    font-size: 20px;
    color: ${vCOLORS.footerColor};
    text-align: left;
  }
`;

const StartButton = styled(Box)`
  background-color: ${vCOLORS.mButtonBg};
  width: 154px;
  height: 44px;
  font-family: ${vTextStyle.sSemiBold};
  font-size: 18px;
  color: ${vCOLORS.mButtonText};
  border-radius: 2px;

  &:hover {
    opacity: 1;
  }
`;
