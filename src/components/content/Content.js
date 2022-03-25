import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import {
  Routes,
  Route,
} from "react-router-dom";
import ListItemComponent from "../ListItemComponent/ListItemComponent";


const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Routes>

      <Route  path="/" element={ "Hello Home Page"} />
      <Route  path="/author" element={ <ListItemComponent/>} />
      <Route  path="/favouriteAuthor" element={ <ListItemComponent/>} />
      
    </Routes>
  </Container>
);

export default Content;
