import { Stack } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import FooterActionM from "../../2-Components/2Footer/FooterActionM";

const ServiceBooking = () => {
  return (
    <Container>
      <WebNavigation />

      <FooterActionM />
    </Container>
  );
};

export default ServiceBooking;

const Container = styled(Stack)``;
