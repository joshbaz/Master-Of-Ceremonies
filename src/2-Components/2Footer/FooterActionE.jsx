import { Stack, Box, Image } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import FooterImage1 from "../../1-Assets/Images/footerImage1.png";

const FooterActionE = () => {
  return (
    <Container>
      <Stack direction="row" h="100%" w="100%" style={{display:'flex', justifyContent:'space-between'}}>
        <Box
          w="525px"
          as="text"
          className="footerContent"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
                  }}
        >
          Make your event truly exceptional with the expertise & finesse of
          Master of Ceremonies UG
        </Box>
       
          <Stack direction="row" spacing={"20px"} alignItems="center" h="100%">
            <LearnButton as="button">Learn more</LearnButton>
            {/** Get Started Button */}
            <StartButton as="button">Get Started</StartButton>
          </Stack>
        
      </Stack>
    </Container>
  );
};

export default FooterActionE;

const Container = styled.footer`
  width: 100vw;
  height: 218px;
  background-color: ${vCOLORS.darkBg};
  padding: 0 148px;
  color: white;


  .footerContent {
    font-family: ${vTextStyle.sSemiBold};
    font-size: 28px;
    color: ${vCOLORS.footerColor};
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

const LearnButton = styled(Box)`
  background-color: ${vCOLORS.mButtonLightBg};
  width: 154px;
  height: 44px;
  font-family: ${vTextStyle.sSemiBold};
  font-size: 18px;
  color: ${vCOLORS.mButtonLightTxt};
  border-radius: 2px;
  border: 1px solid ${vCOLORS.mButtonLightTxt};
  &:hover {
    background-color: ${vCOLORS.mButtonLightTxt};
    color: ${vCOLORS.mButtonText};
  }
`;
