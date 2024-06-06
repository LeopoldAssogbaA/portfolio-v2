'use client'

import React from 'react';
import { About1, About2 } from './styled';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap';

const About: React.FC = () => {
  useGSAP(() => {
    const about = document.querySelector('.about2');
    if (!about) return;
    const text = new SplitType(about as HTMLElement, { types: 'chars' });
    gsap.fromTo(text.chars,
      {
        color: "#0000",
      },
      {
        color: "#52b600",
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".main-container",
          start: 'top+=20% center+=12.5%',
          end: 'top+=30% bottom-=25%',
          scrub: true,
          // markers: true,
          toggleActions: 'play play reverse reverse'
        }
      });
  }, []);

  useGSAP(() => {
    const about = document.querySelector('.about');
    const about2 = document.querySelector('.about2');
    if (!about || !about2) return;

    gsap.to([about, about2],
      {
        scale: 0,
        transform: "perspective(1000px) translateZ(-500px)",
        opacity: 0,
        scrollTrigger: {
          trigger: ".main-container",
          start: 'top+=30% center+=12.5%',
          end: 'top+=40% bottom-=25%',
          scrub: true,
          // markers: true,
          toggleActions: 'play play reverse reverse'
        }
      });
  });


  useGSAP(() => {
    const about = document.querySelector('.about');
    if (!about) return;
    const text = new SplitType(about as HTMLElement, { types: 'chars' });
    gsap.fromTo(text.chars,
      {
        color: "#0000",
      },
      {
        color: "#52b600",
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".main-container",
          start: 'top+=15% center',
          end: 'top+=20% bottom-=37.5%',
          scrub: true,
          // markers: true,
          toggleActions: 'play play reverse reverse'
        }
      });
  }, []);

  return (
    <>
      <About1 className="about-presentation about">
        Sunt quis dolor Lorem nisi. Aliquip ea elit dolor qui ad amet officia proident non non deserunt deserunt. Duis ut magna dolor consectetur dolor excepteur nostrud. Excepteur esse duis deserunt sint commodo et cillum ad in reprehenderit laboris. Exercitation eu qui culpa esse labore excepteur aliquip voluptate elit nulla laborum officia enim reprehenderit. Tempor do proident exercitation duis labore aute laborum et consequat non non minim. Sit sunt fugiat aliquip officia culpa. Dolor veniam consectetur incididunt magna pariatur velit consequat enim do reprehenderit velit.
      </About1>
      <About2 className="about-presentation about2">
        Sunt quis dolor Lorem nisi. Aliquip ea elit dolor qui ad amet officia proident non non deserunt deserunt. Duis ut magna dolor consectetur dolor excepteur nostrud. Excepteur esse duis deserunt sint commodo et cillum ad in reprehenderit laboris. Exercitation eu qui culpa esse labore excepteur aliquip voluptate elit nulla laborum officia enim reprehenderit. Tempor do proident exercitation duis labore aute laborum et consequat non non minim. Sit sunt fugiat aliquip officia culpa.
      </About2>
    </>
  );
};

export default About;
