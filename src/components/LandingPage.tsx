'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import Cursor from './styledComponents/Cursor';
import gsap from 'gsap';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/all';
import { Name } from './styledComponents/Name';
import { ScrollTriggerEl } from './styledComponents/ScrollTrigger';
import { Halftone } from './styledComponents/HalfTone';
import { Welcome } from './styledComponents/Welcome';
import { Work } from './styledComponents/Work';
import { Portfolio } from './styledComponents/Portfolio';
import Menu from './Menu';
import { LandingPageSection } from './styledComponents/LandingPageScroll';

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


    workTimeline.to(".work", {
      opacity: 0.4,
      duration: .2,
      ease: "bounce",
      yoyo: true,
    });
    workTimeline.to(".work", {
      opacity: 0.1,
      duration: .1,
      yoyo: true,
      ease: "back.inOut(1)",
    });

    workTimeline.to(".work", {
      opacity: 0.4,
      duration: .2,
      ease: "bounce",
      yoyo: true,
    });
    workTimeline.to(".work", {
      opacity: 0.1,
      duration: .4,
      yoyo: true,
      ease: "bounce",
    });

    heartBeatTimeline.delay(2)
    heartBeatTimeline.repeat(-1)
    heartBeatTimeline.repeatDelay(.6)
    workTimeline.delay(2)
    workTimeline.repeat(-1)
    workTimeline.repeatDelay(.6)

  }, [init]);




  // SCROLLTRIGGER
  useGSAP(() => {
    const name = document.querySelector('.name');
    const landingPage = document.querySelector('.landingPage');


    gsap.to(name, {
      top: '40px',
      left: '180px',
      position: 'fixed',
      scale: '0.5',
      scrollTrigger: {
        trigger: landingPage,
        start: 'top+=25% center',
        end: 'top+=50% bottom-=25%',
        markers: true,
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

    gsap.to(".work", {
      top: 'calc(2em + 20px)',
      opacity: 1,
      duration: .2,
      ease: "elastic",
      delay: 1.5,
      onComplete: () => {
        workTimeline.pause();
      }
    });

    heartBeatTimelineMoove.to(".landingPage", {
      "--gradient-start": "1.5em",
      "--gradient-end": "1%",
      "--j0": "-0.1",
      "--i0": "0.85",
      delay: .5,
      ease: "back.inOut(4)",
      onComplete: () => {
        gsap.to(".landingPage", {
          "--j0": "0.03",
          "--i0": "0.03",
          "--gradient-end": "0%",
          "--gradient-start": "0%",
          duration: 0
          // "--gradient-end": "9%",
          // "--gradient-start": "1.5em",
        });
      }
    });

    heartBeatTimelineMoove.to(".portfolio", {
      top: '0',
      duration: .5,
      ease: "elastic",
      delay: .5
    });

    heartBeatTimelineMoove.to(".landingPage", {
      duration: .8,
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
        <Welcome ref={sectionRef} className="landingPage"> <Cursor />
          <Halftone className="halftone" />
          <Name className='name'>
            Léopold Assogba
          </Name>
          <Portfolio className='portfolio'>
            Portfolio
          </Portfolio>
          <Work className='work'>
            Développeur FullStack JS/TS
          </Work>
          <Menu />
          <ScrollTriggerEl className='ScrollTrigger' onClick={() => initPage()} />
        </Welcome>
      </LandingPageSection>
    </>
  );
}

export default MyComponent;
