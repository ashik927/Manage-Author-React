import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const SideBar = ({ isOpen, toggle }) =>{

  let location = useLocation();


  return (
  // <div className={classNames("sidebar", { "is-open": isOpen })}>
  <>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Author SideBar</h3>
      <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/"} style={{ color: location.pathname == '/' ?'black' : 'blue' }}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
               Home
          </NavLink>
        </NavItem>
      </Nav>
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/author"} style={{ color: location.pathname == '/author' ?'black' : 'blue' }}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
               Author
          </NavLink>
        </NavItem>
      </Nav>
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/favouriteAuthor"} style={{ color:location.pathname == '/favouriteAuthor' ?'black' : 'blue' }} >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
               Favourite Author
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    </div>
   
    </>
  // </div>
 );
};



export default SideBar;
