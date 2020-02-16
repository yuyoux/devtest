import React from "react";
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
          <NavItem className="pb-4">
            <NavLink href="/" className="pb-0 nav__item">
              ABOUT US
            </NavLink>
          </NavItem>
          <NavItem className="pb-4">
            <NavLink href="/" className="pb-0 nav__item">
              WORK
            </NavLink>
          </NavItem>
          <NavItem className="pb-4">
            <NavLink href="/" className="pb-0 nav__item">
              SERVICES
            </NavLink>
          </NavItem>
          <NavItem className="pb-4">
            <NavLink href="/" className="pb-0 nav__item">
              BLOG
            </NavLink>
          </NavItem>
          <NavItem className="pb-4">
            <NavLink href="/" className="pb-0 nav__item">
              RESEARCH
            </NavLink>
          </NavItem>
          <NavItem className="pb-4">
            <NavLink href="/" className="pb-0 nav__item">
              CAREERS
            </NavLink>
          </NavItem>
          <NavItem className="pb-4">
            <NavLink href="/" className="pb-0 nav__item">
              CONTATC US
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBig;
