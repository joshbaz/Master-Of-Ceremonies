import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { Stack, Box, Image } from "@chakra-ui/react";
import MCicon from "../../1-Assets/icons/MCicon.svg";
import MCname from "../../1-Assets/icons/MCname.svg";
import Slogan from "../../1-Assets/icons/Slogan.svg";
import {
  FaTwitterSquare,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPermPhoneMsg } from "react-icons/md";

const FooterMain = () => {
  return (
    <Container>
      <Stack
        direction="column"
        spacing={"40px"}
        className="mx-auto justify-center h-[100%] items-center max-w-[1000px] lg:mt-[40px] lg:mb-[20px] lg:border-t lg:border-[#979797]"
      >
        <Box className="flex flex-row flex-wrap justify-between  items-center w-full lg:px-[100px] lg:py-[40px]">
          {/** logo and solgan */}
          <Stack className="items-center" spacing={"16px"}>
            <Box className="w-[173px]">
              <Image src={MCicon} alt={""} />
            </Box>
            <Stack spacing={"4px"} className="items-center">
              <Box className="w-[330px]">
                <Image src={MCname} alt={""} />
              </Box>
              <Box className="w-[224px]">
                <Image src={Slogan} alt={""} />
              </Box>
            </Stack>
          </Stack>

          {/** contact details */}

          <Stack spacing={"40px"}>
            <Stack spacing={"16px"}>
              <Box className="flex text-[#EFF0F7] gap-[16px]">
                <Box>
                  <MdEmail size={22} />
                </Box>
                <p>theartistry360@gmail.com</p>
              </Box>
              <Box className="flex text-[#EFF0F7] gap-[16px]">
                <Box>
                  <MdPermPhoneMsg size={22} />
                </Box>
                <p>(254) 456-7890</p>
              </Box>
            </Stack>
            <Stack direction="row" className="w-full justify-between">
              <p
                className="text-[#EFF0F7] text-[16px]"
                style={{ fontFamily: vTextStyle.sSemiBold }}
              >
                Social Media
              </p>

              <Box className=" flex items w-max max-auto text-[#F2F2F2] gap-[30px]">
                <FaFacebookSquare size={22} />
                <FaLinkedinIn size={22} />
                <FaYoutube size={22} />
                <FaInstagram size={22} />
              </Box>
            </Stack>
          </Stack>
        </Box>

        <Box className="flex flex-row flex-wrap justify-between  items-center w-full  lg:py-[0px] ">
          <Box className="flex flex-row flex-wrap justify-between  items-center w-full lg:mx-[50px] lg:py-[0px] lg:border-t lg:border-[#979797]">
            <Box className="flex flex-row flex-wrap justify-between  items-center w-full lg:pt-[24px]">
              <Box
                className="uppercase flex gap-x-[22px] text-[#EFF0F7] text-[12px]"
                style={{ fontFamily: vTextStyle.sRegular }}
              >
                <p>About us</p>
                <p>Contact us</p>
                <p>SERVICES</p>
                <p>Privacy Policy</p>
              </Box>
              <Box className=" flex gap-x-[22px] text-[#EFF0F7]">
                Copyright © 2022 • ABC Company.
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default FooterMain;

const Container = styled.section`
  min-height: 54vh;
  background: rgb(8, 8, 8);
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
