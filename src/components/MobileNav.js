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

const MobileNav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="faded" light className="text-left px-1">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem className="text-center nav__container">
            <NavLink
              href="https://newrepublique.com/about-us/"
              className="pb-0 nav__item--smail"
            >
              ABOUT US
            </NavLink>
            <span></span>
          </NavItem>
          <NavItem className="text-center nav__container">
            <NavLink
              href="https://newrepublique.com/work/"
              className="pb-0 nav__item--smail"
            >
              WORK
            </NavLink>
            <span></span>
          </NavItem>
          <NavItem className="text-center nav__container">
            <NavLink
              href="https://newrepublique.com/about-us/#our_services"
              className="pb-0 nav__item--smail"
            >
              SERVICES
            </NavLink>
            <span></span>
          </NavItem>
          <NavItem className="text-center nav__container">
            <NavLink
              href="https://newrepublique.com/blog/"
              className="pb-0 nav__item--smail"
            >
              BLOG
            </NavLink>
          </NavItem>
          <NavItem className="text-center nav__container">
            <NavLink
              href="https://newrepublique.com/research/"
              className="pb-0 nav__item--smail"
            >
              RESEARCH
            </NavLink>
            <span></span>
          </NavItem>
          <NavItem className="text-center nav__container">
            <NavLink
              href="https://newrepublique.com/careers/"
              className="pb-0 nav__item--smail"
            >
              CAREERS
            </NavLink>
            <span></span>
          </NavItem>
          <NavItem className="text-center nav__container">
            <NavLink
              href="https://newrepublique.com/contact/"
              className="pb-0 nav__item--smail"
            >
              CONTATC US
            </NavLink>
            <span></span>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MobileNav;
