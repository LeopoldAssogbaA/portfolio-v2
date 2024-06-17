'use client';

import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SchoolOne = styled.div`
  cursor: none;
  z-index: 2;
  position: fixed;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  display: block;
  margin: 0 auto;
  left: 50%;
  width: 75vw;
  height: 75vh;
  transform: translate(-50%, 0);
`;

const SchoolTwo = styled.div`
  cursor: none;
  z-index: 2;
  position: fixed;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  display: block;
  margin: 0 auto;
  bottom: -20px;
  left: 50%;
  width: 70vw;
  height: 70vh;
  transform: translate(-50%,0) rotate3d(1, 0, 0, 90deg);
  transform-origin: bottom;
`;

const School = () => {
  useGSAP(() => {
    gsap.fromTo(".school-one",
      {
        bottom: "-100%",
      },
      {
        bottom: "-20px",
        scrollTrigger: {
          trigger: ".main-container",
          start: "top+=45% bottom-=20%",
          end: "top+=55% bottom-=37.5%",
          scrub: true,
          toggleActions: 'play none none none',
        },
      });
    gsap.fromTo(".school-two", 
    {
      transform: "translate(-50%,0) rotate3d(1, 0, 0, 90deg)",
    },
    {
      transform: "translate(-50%,0) rotate3d(1, 0, 0, 0deg)",
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=55% bottom-=37.5%",
        end: "top+=65% bottom-=37.5%",
        scrub: true,
        // markers: true,
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(".school", 
    {
      x: "-50%"
    },
    {
      x: "-200%",
      stagger: 0.02,
      scrollTrigger: {
        trigger: ".main-container",
        start: "top+=65% center",
        end: "top+=80% center",
        scrub: true,
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <>
      <SchoolOne className="school school-one" />
      <SchoolTwo className="school school-two" />
    </>
  );
};

export default School;
