import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Navbar.scss";

const NavBig = props => {
  return (
    <Navbar color="faded" light className="text-left px-1">
      <Collapse isOpen={true} navbar>
        <Nav navbar>
          <NavItem className="nav__container">
            <NavLink href="/" className="pb-0 nav__item">
              ABOUT US
            </NavLink>
            <span></span>
          </NavItem>
          <NavItem className="nav__container">
            <NavLink href="/" className="pb-0 nav__item">
              WORK
            </NavLink>
            <span></span>
          </NavItem>
          <NavItem className="nav__container">
            <NavLink href="/" className="pb-0 nav__item">
              SERVICES
            </NavLink>
            <span></span>
          </NavItem>
          <NavItem className="nav__container">
            <NavLink href="/" className="pb-0 nav__item">
              BLOG
            </NavLink>
          </NavItem>
          <NavItem className="nav__container">
            <NavLink href="/" className="pb-0 nav__item">
              RESEARCH
            </NavLink>
            <span></span>
          </NavItem>
          <NavItem className="nav__container">
            <NavLink href="/" className="pb-0 nav__item">
              CAREERS
            </NavLink>
            <span></span>
          </NavItem>
          <NavItem className="nav__container">
            <NavLink href="/" className="pb-0 nav__item">
              CONTATC US
            </NavLink>
            <span></span>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBig;
