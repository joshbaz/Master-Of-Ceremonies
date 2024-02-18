import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { Stack, Box, Image } from "@chakra-ui/react";
import wedsEvent from "../../1-Assets/Images/weeding-social.svg";
import publicEvent from "../../1-Assets/Images/public-comm.svg";
import gallery1 from "../../1-Assets/Images/gallery1.svg";
import gallery2 from "../../1-Assets/Images/gallery2.svg";
import gallery3 from "../../1-Assets/Images/gallery3.svg";
import gallery4 from "../../1-Assets/Images/gallery4.svg";
import gallery5 from "../../1-Assets/Images/gallery5.svg";
import gallery6 from "../../1-Assets/Images/gallery6.svg";
import gallery7 from "../../1-Assets/Images/gallery7.svg";
import gallery8 from "../../1-Assets/Images/gallery8.svg";
import gallery9 from "../../1-Assets/Images/gallery9.svg";

const galleryData = [
  {
    image: gallery1,
    alt: "gallery1",
  },
  {
    image: gallery2,
    alt: "gallery2",
  },
  {
    image: gallery3,
    alt: "gallery3",
  },
  {
    image: gallery4,
    alt: "gallery4",
  },
  {
    image: gallery5,
    alt: "gallery5",
  },
  {
    image: gallery6,
    alt: "gallery6",
  },
  {
    image: gallery7,
    alt: "gallery7",
  },
  {
    image: gallery8,
    alt: "gallery8",
  },
  {
    image: gallery9,
    alt: "gallery9",
  },
];

const HMGallery = () => {
  return (
    <Container>
      <Stack
        direction="column"
        spacing={"50px"}
        className="mx-auto justify-center h-[100%] items-center max-w-[1000px] lg:py-[70px]"
      >
        <h1
          className="text-[#073845] text-[42px]"
          style={{ fontFamily: vTextStyle.sSemiBold }}
        >
          Catch Our Emcee live in action!
        </h1>

        <Stack spacing={"50px"} className="w-full mx-auto items-center">
          <Box className="w-full flex flex-wrap items-center justify-center  gap-[23px] lg:grid lg:auto-rows-auto  lg:grid-cols-3  lg:gap-[23px] lg:items-center">
            {galleryData.map((data, index) => {
              return (
                <Box key={index} className="w-[200px] md:w-full max-w-fit lg:max-w-[340px]">
                  <Image src={data.image} alt={data.alt} />
                </Box>
              );
            })}
          </Box>

          <button
            className="bg-[#FCEFD1] text-[#093D4C] py-[13px] px-[144px] w-max"
            style={{ fontFamily: vTextStyle.sBold }}
          >
            {" "}
            Learn more...
          </button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HMGallery;

const Container = styled.section`
  min-height: 54vh;
  background: rgb(255, 255, 255);
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
