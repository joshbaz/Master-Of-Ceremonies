import React from 'react'
import logo from '../../1-Assets/logos/logo.svg'
import logoWhite from "../../1-Assets/logos/logo_white.svg";
import styled from 'styled-components';
import { Stack, Box, Button } from '@chakra-ui/react';
import { vCOLORS, vTextStyle } from '../../1-Assets/themes/StyleVariables';
import { MENUDATA } from '../../1-Assets/data/MenuItems';
import { NavLink } from 'react-router-dom';


const WebNavigation = ({sectionbg}) => {
  return (
    <NavContainer direction="row" sectionbg={sectionbg}>
      <Stack direction="row" alignItems={"center"} spacing={"69px"}>
        {/** logo */}
        <ImageContainer>
          <img src={sectionbg ? logoWhite : logo} alt={"Master of Ceremonies Logo"} />
        </ImageContainer>
        {/** Menu Items */}
        <Stack direction={"row"} spacing={"10px"}>
          {MENUDATA.map((data, index) => {
            return (
              <NavItems key={index}>
                <NavLink
                  to={data.path}
                  end={data.path === "/" ? true : false}
                  className={({ isActive }) =>
                    isActive
                      ? `menuwrap activeItem ${
                          sectionbg ? "menuWhiteActive" : ""
                        }`
                      : `menuwrap ${sectionbg ? "menuWhite" : ""}`
                  }
                >
                  {data.title}
                </NavLink>
              </NavItems>
            );
          })}
        </Stack>
      </Stack>

      {/** Get Started Button */}
      <StartButton as="button" sectionbg={sectionbg}>
        Get Started
      </StartButton>
    </NavContainer>
  );
}

export default WebNavigation

const NavContainer = styled(Stack)`
  height: 109px;
  width: 100vw;
  padding: 0 33px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.sectionbg ? '#ffffff' : vCOLORS.menuBg};
  overflow: hidden;

  
`;

const ImageContainer = styled(Stack)`
height: 76px;
opacity: 1;
  img {
    height: 100%;

  }
`;

const NavItems = styled(Box)`
  .menuwrap {
    height: 54px;
    width: 98px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid transparent;
    font-family: ${vTextStyle.sSemiBold};
    color: ${vCOLORS.mTextLinks};
    font-size: 17px;

    &:hover {
      border-bottom: 2px solid ${vCOLORS.mTextBorderHover};
    }
  }
  .activeItem {
    border-bottom: 2px solid ${vCOLORS.mTextBorderHover};
    background-color: ${vCOLORS.menuItemBg};
  }

  .menuWhite {
    color: #0b4251;
    &:hover {
      border-bottom: 2px solid #0b4251;
    }
  }

  .menuWhiteActive {
    border-bottom: 2px solid #0b4251;
    background-color: rgb(247, 252, 255);
    color: #0b4251;
  }
`;

const StartButton = styled(Box)`
  background-color: ${vCOLORS.mButtonBg};

  padding: 13px 24px;
  font-family: ${vTextStyle.sSemiBold};
  font-size: 18px;
  color: ${(props) => (props.sectionbg ? "#080808" : vCOLORS.mButtonText)};
  border-radius: 2px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;