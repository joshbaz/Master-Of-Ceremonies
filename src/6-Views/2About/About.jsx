import { Stack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";

import FooterActionE from "../../2-Components/2Footer/FooterActionE";

const About = () => {
  return (
    <Container>
      <WebNavigation />

      <FooterActionE />
    </Container>
  );
};

export default About;

const Container = styled(Stack)``;
