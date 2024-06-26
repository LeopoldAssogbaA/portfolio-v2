'use client';

import { useGSAP } from "@gsap/react";
import styled from "styled-components";
import gsap from "gsap";

const ContainerEnter = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 100vh); 
  background-color: transparent;

  div {
    height: 0%;
    background-color: #52b600;
   
  }
`;

const ContainerLeave = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(10, 10vh); 
  background-color: transparent;

  div {
    width: 100%;
    background-color: #52b600;
   
  }
`;

const PageTransition: React.FC = () => {

  useGSAP(() => {
    gsap.fromTo("div.page-transition-enter",
      {
        height: "0%",
      },
      {
        height: "100%",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".main-container",
          start: 'top+=30% center',
          end: 'top+=40% bottom-=37.5%',
          scrub: true,
          toggleActions: 'play none none none',
          onLeave: () => {
            gsap.to("div.page-transition-enter", {
              opacity: 0,
              duration: 0
            });
            gsap.to("div.page-transition-container-leave", {
              zIndex: 3,
              duration: 0
            });
            gsap.to(".about-presentation", {
              display: "none",
              duration: 0
            });
          },
          onEnterBack: () => {
            gsap.to("div.page-transition-enter", {
              opacity: 1,
              duration: 0
            });
            gsap.to("div.page-transition-container-leave", {
              zIndex: -1,
              duration: 0
            });
            gsap.to(".about-presentation", {
              display: 'block',
              duration: 0
            });
          }
        }
      });
    gsap.to("div.page-transition-leave",
      {
        marginLeft: "100vw",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".main-container",
          start: 'top+=40% top+=60%',
          end: 'top+=45% bottom-=37.5%',
          scrub: true,
          toggleActions: 'play none none none',
        }
      });

  }, []);

  return (
    <>
      <ContainerEnter className="page-transition-container-enter">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="page-transition-enter" />
        ))}
      </ContainerEnter>
      <ContainerLeave className="page-transition-container-leave">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="page-transition-leave" />
        ))}
      </ContainerLeave>
    </>
  );
}

export default PageTransition;
