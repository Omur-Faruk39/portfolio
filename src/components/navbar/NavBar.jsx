import React from "react";
import { NavLink } from "react-router";
import SocialIcon from "../socialIcon/SocialIcon";

function NavBar() {
  return (
    <nav className="flex justify-between items-center w-[100%] h-[80px] bg-gray-200 px-[50px] fixed top-0 shadow z-10">
      <div className="font-[Raleway,sans-serif] text-2xl font-[300]">OMUR</div>

      <ul className="flex justify-between items-center gap-2.5">
        <li>
          <NavLink className={(active) => active.isActive ? 'nav-active': 'nav'} to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="about" className={(active) => active.isActive ? 'nav-active': 'nav'} >About</NavLink>
        </li>
        <li>
          <NavLink to="resume"  className={(active) => active.isActive ? 'nav-active': 'nav'} >Resume</NavLink>
        </li>
        <li>
          <NavLink to="services" className={(active) => active.isActive ? 'nav-active': 'nav'} >Services</NavLink>
        </li>
        <li>
          <NavLink to="portfolio" className={(active) => active.isActive ? 'nav-active': 'nav'} >Portfolio</NavLink>
        </li>
        <li>
          <NavLink to='nothing' className={(active) => active.isActive ? 'nav-active': 'nav'} >
            <span>Dropdown</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="contact"  className={(active) => active.isActive ? 'nav-active': 'nav'} >Contact</NavLink>
        </li>
      </ul>

      <div className="flex gap-2.5">
       <SocialIcon isBorder={false}/>
      </div>
    </nav>
  );
}

export default NavBar;
