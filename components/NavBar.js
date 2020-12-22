import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  Nav,
  MobileIcon,
  NavLogo,
  NavIcon,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbaStyled"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Didital-JA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink smooth href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink smooth href="#about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink smooth href="#portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink smooth href="#skills">
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink smooth href="#resources">
                  Resources
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink smooth href="#contact">
                  Contact
                </NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
