import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import styled from 'styled-components';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Hamburger onClick={toggleMenu}>
        {
            showMenu == true ?   <RxCross1 size={24} /> : <GiHamburgerMenu size={24} />
        }
      
      </Hamburger>
      {showMenu && (
        <MobileMenu>
          <NavItem onClick={toggleMenu}>INQUIRE</NavItem>
          <NavItem onClick={toggleMenu}>APPLY</NavItem>
          <NavItem onClick={toggleMenu}>SUPPORT US</NavItem>
          <NavItem onClick={toggleMenu}>PARENTS</NavItem>
          <NavItem onClick={toggleMenu}>ALUMS</NavItem>
        </MobileMenu>
      )}
      <NavBarContainer>
        <NavItem>INQUIRE</NavItem>
        <NavItem>APPLY</NavItem>
        <NavItem>SUPPORT US</NavItem>
        <NavItem>PARENTS</NavItem>
        <NavItem>ALUMS</NavItem>
      </NavBarContainer>
    </>
  );
};

const NavBarContainer = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
 
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #ffd700;
    transform: scale(1.05);
  }
`;

const Hamburger = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 999;
  cursor: pointer;
  
  @media screen and (min-width: 769px) {
    display: none;
  }

  svg {
    color: black;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    background-color: red;
    position: absolute;
    top: 0px;
    right: 0;
    left: 0;
    z-index: 998;
    padding: 1rem;
    ${NavItem} {
      display: block;
      /* margin-bottom: 1rem; */
    }
  }
`;

export default Navbar;
