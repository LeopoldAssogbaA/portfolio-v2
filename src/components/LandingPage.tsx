'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import Cursor from './styledComponents/Cursor';
import gsap from 'gsap';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/all';
import { Name, NameContainer } from './styledComponents/Name';
import { ScrollTriggerEl } from './styledComponents/ScrollTrigger';
import { Halftone } from './styledComponents/HalfTone';
import { Welcome } from './styledComponents/Welcome';
import { Work } from './styledComponents/Work';
import Menu from './Menu';
import { LandingPageSection } from './styledComponents/LandingPageScroll';


export const Char = styled.span`
  display: inline-block;
  translate: none;
  rotate: none;
  scale: none;
  transform: translate(0px, 0px);
`;


gsap.registerPlugin(ScrollTrigger);

const MyComponent: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealTimeline = gsap.timeline();
  const heartBeatTimeline = gsap.timeline();
  const heartBeatTimelineMoove = gsap.timeline();
  const workTimeline = gsap.timeline();
  const [init, setInit] = useState(false);


  useGSAP(() => {
    if (init) {
      return;
    }

    gsap.to(".mouse-wheel", {
      zIndex: -2,
      duration: 0,
    });

    gsap.to("html", {
      overflow: "hidden",
    });

    gsap.to(".name", {
      clipPath: "inset(0% 0% 0% -100%)",
      delay: 0.8,
      duration: 1.2,
      ease: "elastic",
    });
    gsap.to(".work", {
      clipPath: "inset(0% 0% 0% -100%)",
      delay: 1.5,
      duration: 2,
      ease: "elastic",
    });

  
    revealTimeline.to(".landingPage", {
      "--background": "#52b600",
      "--gradient-start": "4em",
      "--gradient-end": "10%",
      "--j0": "0.40",
      "--i0": "0.80",
      duration: 0.6,
      ease: "back.inOut(1)",
    });
    revealTimeline.to(".landingPage", {
      "--gradient-start": "4em",
      "--gradient-end": "10%",
      "--j0": "0.25",
      "--i0": "0.34",
      duration: 0.2,
      ease: "power4.out",
    });
    revealTimeline.to(".landingPage", {
      "--gradient-start": "1.5em",
      "--gradient-end": "6%",
      "--j0": "0.25",
      "--i0": "0.66",
      duration: 1.2,
      ease: "elastic",
    });

    heartBeatTimeline.to(".landingPage", {
      "--gradient-start": "4em",
      "--gradient-end": "10%",
      "--j0": "0.25",
      "--i0": "0.66",
      duration: .2,
      ease: "bounce",
      yoyo: true,
    });
    heartBeatTimeline.to(".landingPage", {
      "--gradient-start": "1.5em",
      "--gradient-end": "6%",
      "--j0": "0.25",
      "--i0": "0.66",
      duration: .1,
      yoyo: true,
      ease: "back.inOut(1)",
    });

    heartBeatTimeline.to(".landingPage", {
      "--gradient-start": "4em",
      "--gradient-end": "10%",
      "--j0": "0.25",
      "--i0": "0.66",
      duration: .2,
      ease: "bounce",
      yoyo: true,
    });
    heartBeatTimeline.to(".landingPage", {
      "--gradient-start": "1.5em",
      "--gradient-end": "6%",
      "--j0": "0.25",
      "--i0": "0.66",
      duration: .4,
      yoyo: true,
      ease: "bounce",
    });

    heartBeatTimeline.delay(2)
    heartBeatTimeline.repeat(-1)
    heartBeatTimeline.repeatDelay(.6)
  }, [init]);

  // SCROLLTRIGGER
  useGSAP(() => {
    const name = document.querySelector('.name');
    const landingPage = document.querySelector('.landingPageScroll');


    gsap.to(name, {
      top: '40px',
      // left: '50%',
      position: 'fixed',
      scale: '0.75',
      scrollTrigger: {
        trigger: landingPage,
        start: 'top+=25% center',
        end: 'top+=50% bottom-=25%',
        scrub: true,
      }
    });
    gsap.fromTo(
      ".mouse-wheel",
      { opacity: 1, y: 0 },
      {
        opacity: 0, y: -50, scrollTrigger: {
          trigger: landingPage,
          start: 'top+=25% center',
          end: 'top+=50% bottom-=25%',
          scrub: true,
        }
      }
    );

    gsap.to('.char', {
      y: 0,
      stagger: 0.01,
      scrollTrigger: {
        trigger: landingPage,
        start: 'top+=37.5% center',
        end: 'top+=50% bottom-=37.5%%',
        scrub: true,
      }
    });
  }, []);

  // INIT PAGE WITH SCROLL
  const initPage = () => {
    setInit(true);
    heartBeatTimeline.pause();
    gsap.to("html", {
      overflow: "auto",
    });

    heartBeatTimelineMoove.to(".landingPage", {
      "--gradient-end": "2%",
      "--gradient-start": "0.9%",
      duration: .1,
      ease: "back.inOut(4)",
    });

    heartBeatTimelineMoove.to(".landingPage", {
      "--j0": "0.03",
      "--i0": "0.03",
      duration: .4,
      ease: "elastic.out(1,0.2)",
      onComplete: () => {
        gsap.to(".mouse-wheel", {
          zIndex: 1000,
          top: "46%",
          duration: 0,
        });
        gsap.fromTo(
          ".mouse-wheel",
          { opacity: 0, y: -25 },
          {
            opacity: 1, y: 0, duration: .8, ease: "power1.in"
          }
        );
      }
    });

    heartBeatTimelineMoove.to(".landingPage", {
      duration: .8,
      delay: .2,
      ease: "circ.inOut",
      "--gradient-end": "10%",
      "--gradient-start": "2%",

    });
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <>
      <LandingPageSection className='landingPageScroll'>
        <Welcome ref={sectionRef} className="landingPage">
          <Cursor />
          <Halftone className="halftone" />
          <NameContainer className='name'>
            <Name className='name'>
              Léopold Assogba
            </Name>
            <Work className='work'>
              <Char className="char">D</Char><Char className="char">é</Char><Char className="char">v</Char><Char className="char">e</Char><Char className="char">l</Char><Char className="char">o</Char><Char className="char">p</Char><Char className="char">p</Char><Char className="char">e</Char><Char className="char">u</Char><Char className="char">r</Char> <Char className="char">F</Char><Char className="char">u</Char><Char className="char">l</Char><Char className="char">l</Char><Char className="char">S</Char><Char className="char">t</Char><Char className="char">a</Char><Char className="char">c</Char><Char className="char">k</Char> <Char className="char">J</Char><Char className="char">S</Char><Char className="char">/</Char><Char className="char">T</Char><Char className="char">S</Char>
            </Work>
          </NameContainer>
          <Menu />
          <ScrollTriggerEl className='ScrollTrigger' onClick={() => initPage()} />
          <div className="mouse-wheel center">
            <div className="mouse">
              <div className="scroll-wheel"></div>
            </div>
          </div>
        </Welcome>
      </LandingPageSection>
    </>
  );
}

export default MyComponent;
