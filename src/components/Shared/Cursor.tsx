import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import styled from 'styled-components';

const CursorDiv = styled.div`
  position: fixed;
  background: #52b600;
  mix-blend-mode: difference;
  width: 25px;
  height: 25px;
  margin: -10px 0 0 -10px;
  border-radius: 50%;
  will-change: transform;
  user-select: none;
  pointer-events: none;
  z-index: 10000;
`;

const Cursor: React.FC = () => {

  useGSAP(() => {
    document.body.addEventListener("mousemove", evt => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY
      })
    });
  }, []);


  // useGSAP(() => {
  //   gsap.to(".cursor", {
  //     background: "#000",
  //     duration: 1,
  //     ease: "back.in(1.7)",
  //   });
  // }, []);

  return <CursorDiv className="cursor" />;
};

export default Cursor;
