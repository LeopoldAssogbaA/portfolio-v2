import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MainNav = styled.nav`
  z-index: 100;
  margin: 0;
  border-radius: 50px;
  width: 0px;
  height: 0px;
  background: #52b600; // couleur verte utilisée dans le projet
  position: fixed;
  top: 20px;
  left: 20px;
`;

const NavTrigger = styled.div`
  z-index: 1000;
  margin: 0;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  opacity: 0;
  background: #52b600; // couleur verte utilisée dans le projet
  position: fixed;
  top: 20px;
  left: 20px;
`;
{/* @ts-ignore */ }
const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: navRef });

  const triggerAnimation = contextSafe((isHover: boolean) => {

    const landingPage = document.querySelector('.landingPage');

    console.log('hover', isHover);
    if (isHover) {
      gsap.to(landingPage, {
        duration: .2,
        ease: "circ.inOut",
        "--gradient-end": "0%",
        "--gradient-start": "0%",
      });
      gsap.to(".menu", {
        duration: .2,
        ease: "circ.inOut",
        width: "100px",
        height: "100px",
      });
      setIsOpen(true);
    } else {
      gsap.to(landingPage, {
        duration: .2,
        ease: "circ.inOut",
        "--gradient-end": "10%",
        "--gradient-start": "2%",
      });
      gsap.to(".menu", {
        duration: .2,
        ease: "circ.inOut",
        width: "0",
        height: "0",
      });
    }
  });

  useGSAP(() => {
    if (isOpen) {
      document.addEventListener('click', () => {
        triggerAnimation(false);
      })

      return () => {
        document.removeEventListener('click', () => {
          triggerAnimation(false);
        })
      }
    }
  }, [triggerAnimation]);

  return (
    <div ref={navRef}>
      <NavTrigger className="navTrigger" onMouseEnter={() => triggerAnimation(true)} />
      <MainNav className="menu">
        {/* <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> */}
      </MainNav>
    </div >
  );
};

export default Menu;
