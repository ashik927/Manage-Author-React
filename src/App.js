import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
import "./App.css";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
  );
};

export default App;




{/* <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
activeKey="/home"
onSelect={selectedKey => alert(`selected ${selectedKey}`)}
>
    <div className="sidebar-sticky"></div>
<Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
    Disabled
    </Nav.Link>
</Nav.Item>
</Nav> */}