import React from "react";
import "../App.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ShakeHard } from "reshake";

const NavBar = () => {
  return (
    <div className="App">
      <ShakeHard>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          bg="danger"
          variant="dark"
        >
          <ReactBootStrap.Navbar.Brand href="#home">
            THICC BOIS HOURS
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <Link to="/Features">
                <ReactBootStrap.Nav.Link href="#features">
                  Features
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/Pricing">
                <ReactBootStrap.Nav.Link href="#pricing">
                  Pricing
                </ReactBootStrap.Nav.Link>
              </Link>
              <ReactBootStrap.NavDropdown
                title="YEET"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  Action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Another action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  Something
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                  Separated link
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <Link to="/Moredeets">
                <ReactBootStrap.Nav.Link href="#deets">
                  More deets
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/Dankmemes">
                <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </ReactBootStrap.Nav.Link>
              </Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </ShakeHard>
    </div>
  );
};

export default NavBar;
