import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
    height:35px;
  }

  a, .navbar-nav .nav-link {
    color: #bbb;
    float:right;
    padding:3px;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar>
      <Navbar.Collapse>
        <Nav>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/gallery">Gallery</Link>
            </Nav.Link>
          </Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
