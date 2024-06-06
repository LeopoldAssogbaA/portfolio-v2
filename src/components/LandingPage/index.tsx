'use client';

import React, { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import styled from 'styled-components';


import SplitType from 'split-type'
import {
  Halftone,
  Name,
  NameContainer,
  ScrollTriggerEl,
  LandingPageContainer,
  Work
} from './styled';

export const Char = styled.span`
  display: inline-block;
  translate: none;
  rotate: none;
  scale: none;
  transform: translate(0px, 0px);
`;

gsap.registerPlugin(ScrollTrigger);

const LandingPage: React.FC<{ setInit: (init: boolean) => void, init: boolean }> = ({ setInit, init }) => {
  const revealTimeline = gsap.timeline();
  const heartBeatTimeline = gsap.timeline();
  const heartBeatTimelineMoove = gsap.timeline();

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


    revealTimeline.to(".landing-page", {
      "--background": "#52b600",
      "--gradient-start": "4em",
      "--gradient-end": "10%",
      "--j0": "0.40",
      "--i0": "0.80",
      duration: 0.6,
      ease: "back.inOut(1)",
    });
    revealTimeline.to(".landing-page", {
      "--gradient-start": "4em",
      "--gradient-end": "10%",
      "--j0": "0.25",
      "--i0": "0.34",
      duration: 0.2,
      ease: "power4.out",
    });
    revealTimeline.to(".landing-page", {
      "--gradient-start": "1.5em",
      "--gradient-end": "6%",
      "--j0": "0.25",
      "--i0": "0.66",
      duration: 1.2,
      ease: "elastic",
    });

    heartBeatTimeline.to(".landing-page", {
      "--gradient-start": "4em",
      "--gradient-end": "10%",
      "--j0": "0.25",
      "--i0": "0.66",
      duration: .2,
      ease: "bounce",
      yoyo: true,
    });
    heartBeatTimeline.to(".landing-page", {
      "--gradient-start": "1.5em",
      "--gradient-end": "6%",
      "--j0": "0.25",
      "--i0": "0.66",
      duration: .1,
      yoyo: true,
      ease: "back.inOut(1)",
    });

    heartBeatTimeline.to(".landing-page", {
      "--gradient-start": "4em",
      "--gradient-end": "10%",
      "--j0": "0.25",
      "--i0": "0.66",
      duration: .2,
      ease: "bounce",
      yoyo: true,
    });
    heartBeatTimeline.to(".landing-page", {
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
    const landingPage = document.querySelector('.main-container');

    gsap.to(name, {
      top: '40px',
      position: 'fixed',
      scale: '0.75',
      scrollTrigger: {
        trigger: landingPage,
        start: 'top+=10% center',
        end: 'top+=20% bottom-=25%',
        markers: true,
        scrub: true,
      },
      onComplete: () => {
        gsap.to(".work", {
          opacity: 1,
        });
      }
    });

    gsap.fromTo(
      ".mouse-wheel",
      { opacity: 1, y: 0 },
      {
        opacity: 0, y: -50,
        scrollTrigger: {
          trigger: landingPage,
          start: 'top+=10% center',
          end: 'top+=20% bottom-=25%',
          scrub: true,
        }
      }
    );


    const work = document.querySelector('.work');
    if (!work) return;
    const text = new SplitType(work as HTMLElement, { types: 'chars' });
    gsap.to(text.chars, {
      y: 0,
      stagger: 0.01,
      scrollTrigger: {
        trigger: landingPage,
        start: 'top+=15% center',
        end: 'top+=21% bottom-=37.5%',
        scrub: true,
      }
    });
  }, []);

  // INIT PAGE WITH SCROLL
  const initPage = () => {
    setInit(true);
    console.log('init');
    heartBeatTimeline.pause();
    gsap.to("html", {
      overflow: "auto",
    });

    heartBeatTimelineMoove.to(".landing-page", {
      "--gradient-end": "2%",
      "--gradient-start": "0.9%",
      duration: .1,
      ease: "back.inOut(4)",
    });

    gsap.to(".about-presentation", {
      display: 'block',
    });

    heartBeatTimelineMoove.to(".landing-page", {
      "--j0": "0.025",
      "--i0": "0.025",
      "--gradient-start": "0.9%",
      "--gradient-end": "3%",

      duration: .4,
      ease: "elastic.out(1,0.2)",
      onComplete: () => {
        gsap.to(".mouse-wheel", {
          zIndex: 1000,
          top: "46%",
          duration: 0,
        });
        gsap.to(".scroll-trigger", {
          display: 'none',
        });

        gsap.fromTo(
          ".mouse-wheel",
          { opacity: 0, y: -25 },
          {
            opacity: 1, y: 0, duration: .8, ease: "power1.in"
          }
        );
        setInit(true);
      }
    });
  }

  // RESET PAGE TO TOP ON LOAD
  useEffect(() => {
    const isBrowser = () => typeof window !== 'undefined';
    if (!isBrowser()) return;
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <LandingPageContainer className="landing-page">
      <Halftone className="halftone" />
      <NameContainer className='name'>
        <Name className='name'>
          Léopold Assogba
        </Name>
        <Work className='work'>
          Développeur Fullstack Js/Ts
        </Work>
      </NameContainer>
      <ScrollTriggerEl className='scroll-trigger' onClick={() => initPage()} />
      <div className="mouse-wheel center">
        <div className="mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </LandingPageContainer>
  );
}

export default LandingPage;
