import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import MainImage from '../assets/Rila_7_lakes_panorama.jpeg';

const Styles = styled.div`
  .jumbo {
    background: url(${MainImage});
    background-size: cover;
    color: #efefef;
    height: 450px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
    </Jumbo>
  </Styles>
)
