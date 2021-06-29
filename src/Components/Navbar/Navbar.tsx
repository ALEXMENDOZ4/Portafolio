import React, { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../GlobalStyles";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn,
} from "./styles/NavbarStyles";


export default function Navbar() {
  const [click, setclick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setclick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Portafolio
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button big={""} fontBig={""} primary={""}>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-in">
                    <Button big={""} fontBig={""} primary={""}>
                      SIGN-IN
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}