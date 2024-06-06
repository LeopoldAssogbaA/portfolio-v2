import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const MainNav = styled.nav`
  z-index: 999;
  margin: 0px;
  position: fixed;
  top: 0px;
  left: 20px;
  ul {
    margin: 0;
    padding: 0;
  }
`;
const Step = styled.li`
  z-index: 100;
  margin: 6px 0;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 150px;
  line-height: 1.5em;
  font-size: 1.5em;
  transition: all 0.2s ease;
  border-radius: 4px;
  color: #52b600;
  background: transparent;
`;

const NavTrigger = styled.div`
  z-index: 2;
  margin: 0;
  border-radius: 50%;
  width: 145px;
  height: 145px;
  opacity: 0;
  background: red; 
  position: fixed;
  top: -35px;
  left: -35px;
`;

const Menu: React.FC<{ init: boolean }> = ({ init }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const heartBeatTimeline = gsap.timeline();
  const { contextSafe } = useGSAP({ scope: navRef });

  const triggerAnimation = contextSafe((isHover: boolean) => {
    if (!init) return;
    const landingPage = document.querySelector('.landingPage');

    if (isHover) {
      heartBeatTimeline.to(landingPage, {
        "--gradient-end": "2%",
        "--gradient-start": "0.2%",
        duration: .1,
        ease: "bounce",
        yoyo: true,
      });
      heartBeatTimeline.to(landingPage, {
        "--gradient-start": "0.9%",
        "--gradient-end": "3%",
        duration: .1,
        yoyo: true,
        ease: "back.inOut(1)",
      });

      heartBeatTimeline.to(landingPage, {
        "--gradient-end": "2%",
        "--gradient-start": "0.2%",
        duration: .2,
        ease: "bounce",
        yoyo: true,
      });
      heartBeatTimeline.to(landingPage, {
        "--gradient-start": "0.9%",
        "--gradient-end": "3%",
        duration: .3,
        yoyo: true,
        ease: "bounce",
      });

      heartBeatTimeline.repeat(-1)
      heartBeatTimeline.repeatDelay(.4)

    } else {
      console.log("pause")
      heartBeatTimeline.kill();
      gsap.to(landingPage, {
        duration: .2,
        ease: "circ.inOut",
        "--gradient-start": "0.9%",
        "--gradient-end": "3%",
      });
    }
  });

  useGSAP(() => {
    if (!init) return;
    gsap.fromTo(".menu-step",
      {
        y: -55,
        rotateX: 360,
      },
      {
        y: 0,
        rotateX: 0,
        delay: .37,
        opacity: 1,
        duration: .08,
        stagger: .055,
      });

    gsap.to(".current-step", {
      delay: .8,
      duration: .1,
      scale: 1.2,
      paddingLeft: "40px",
    });

    const steps = document.querySelectorAll('.menu-step');
    steps.forEach(step => {

      const currentStep = step.classList.contains('current-step');
      if (currentStep) return;

      step.addEventListener('mouseenter', () => {
        gsap.to(step, {
          scale: 1.5,
          paddingLeft: "40px",
          duration: 0.02,
          ease: "power1.inOut"
        });
      });
      step.addEventListener('mouseleave', () => {
        gsap.to(step, {
          scale: 1,
          paddingLeft: "0px",
          duration: 0.02,
          ease: "power1.inOut"
        });
      });
    });

  }, [init]);

  return (
    <div ref={navRef}>
      <NavTrigger
        className="navTrigger"
        onMouseEnter={() => triggerAnimation(true)}
        onMouseLeave={() => triggerAnimation(false)}
      />
      <MainNav className="menu">
        <ul>
          <Step className="menu-step step-1 current-step">Home</Step>
          <Step className="menu-step step-2">About</Step>
          <Step className="menu-step step-3">Works</Step>
          <Step className="menu-step step-4">Schools</Step>
          <Step className="menu-step step-5">Contact</Step>
        </ul>
      </MainNav>
    </div >
  );
};

export default Menu;
