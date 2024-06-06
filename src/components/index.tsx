'use client';

import React, { useState } from 'react';

import Cursor from './Shared/Cursor';
import Menu from './Shared/Menu';
import About from './About';
import LandingPage from './LandingPage';

import { MainContainer } from './styled';

const PortfolioContainer: React.FC = () => {
  const [init, setInit] = useState(false);

  return (
    <MainContainer className='main-container'>
      <Cursor />
      <Menu init={init} />
      <LandingPage setInit={setInit} init={init} />
      <About />
    </MainContainer>
  );
}

export default PortfolioContainer;
