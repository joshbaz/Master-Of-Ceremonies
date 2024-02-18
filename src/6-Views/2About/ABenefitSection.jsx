import { Stack, Image, Box } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import ServeIconP from '../../1-Assets/Images/About_Professionalism.svg'
import ServeIconA from '../../1-Assets/Images/About_customApproach.svg'
import ServeIconE from '../../1-Assets/Images/About_engagement.svg'
import ServeIconS from "../../1-Assets/Images/About_cutural.svg";

const benefitsData = [
  {
    icon: ServeIconP,
    title: "Professionalism",
    subtext:
      "We are dedicated to upholding the highest standards of professionalism in every aspect of our services, ensuring seamless and polished execution of events.",
  },
  {
    icon: ServeIconA,
    title: "Customized Approach",
    subtext:
      "Our clients are at the heart of everything we do. We prioritize understanding their unique requirements, fostering strong communication, and delivering tailored solutions that exceed expectations.",
  },
  {
    icon: ServeIconE,
    title: "Community Engagement",
    subtext:
      "We actively engage with and contribute to the local community, fostering positive relationships and supporting initiatives that uplift and empower the people of Uganda.",
  },
  {
    icon: ServeIconS,
    title: "Cultural Sensitivity",
    subtext:
      "Embracing and celebrating the rich cultural tapestry of Uganda, we integrate cultural elements into our hosting style to enhance the authenticity and significance of every event.",
  },
];

const ABenefitSection = () => {
  return (
    <Container>
      <Stack
        direction="column"
        spacing={"50px"}
        className="mx-auto justify-center h-[100%] items-center max-w-[1000px] lg:py-[70px]"
      >
        <Stack spacing={"10px"} className="mx-auto items-center">
          <h1
            className="text-[#EDEBE9] text-[42px]"
            style={{ fontFamily: vTextStyle.sSemiBold }}
          >
            Why Choose Us?
          </h1>
          <Box
            className="text-[#F3C864] text-[18px] max-w-[660px] text-center"
            style={{ fontFamily: vTextStyle.sRegular }}
          >
            Through unwavering creativity, and a deep understanding of our
            clients' needs, we aim to create memorable moments that resonate
            with the spirit of each occasion.
          </Box>
        </Stack>

        <Box className="grid grid-cols-2 gap-[40px] items-center">
          {benefitsData.map((data, index) => {
            return (
              <Stack direction="column" spacing={"25px"} key={index} className="flex flex-col h-[100%] max-h-max max-w-[460px] items-between">
                <Box className="w-[90px] h-[90px]">
                  <img
                    className="w-[120px] h-[120px]"
                    src={data.icon}
                    alt={"prof"}
                  />
                </Box>

                <Stack spacing={"12px"} className=" h-full">
                  <h1
                    className="text-[#EDEBE9] text-justify text-[28px] "
                    style={{ fontFamily: vTextStyle.sSemiBold }}
                  >
                    {data.title}
                  </h1>
                  <p
                    className="text-[#8A8880] text-justify text-[20px] "
                    style={{ fontFamily: vTextStyle.sRegular }}
                  >
                    {data.subtext}
                  </p>
                </Stack>
              </Stack>
            );
          })}
          
        </Box>
      </Stack>
    </Container>
  );
};

export default ABenefitSection;

const Container = styled.section`
  min-height: 54vh;
  background: #060504;
  background-size: cover;

 

  .HeroText {
    text-align: center;
    font-family: ${vTextStyle.sRegular};
    font-size: 26px;
    width: 55%;
    color: ${vCOLORS.mButtonLightTxt};
  }
`;
