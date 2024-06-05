import React from 'react';
import localFont from 'next/font/local'
import PortfolioContainer from '../components';

const myFont = localFont({ src: '../fonts/Moon2.0-Regular.otf' })


const Home = () => {
  return (
    <main style={{ fontFamily: myFont.style.fontFamily }}>
      <PortfolioContainer />
    </main>
  );
}

export default Home;
