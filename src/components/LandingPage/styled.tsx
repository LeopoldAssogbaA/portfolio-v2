import styled from "styled-components";

export const NameContainer = styled.div`
color: #52b600;
font-weight: 800;
width: auto;
height: auto;
position: absolute;
top: 25%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1;
margin: 0;
text-align: center;
`;

export const Name = styled.h1`
color: #52b600;
font-weight: 800;
font-size: 3em;
clip-path: inset(0 0 0 100%);
mix-blend-mode: difference;
width: auto;
height: auto;
line-height: 1.4em;
z-index: 100;
margin: 0;
`;

export const ScrollTriggerEl = styled.a`
position: fixed;
top: 45.5%;
left: 63.8%;
background: transparent;
border-radius: 50px;
z-index: 9999;
width: 80px;
height: 80px;
`;


export const LandingPageContainer = styled.section`
    @property --i0 {
      syntax: "<number>";
      initial-value: 0;
      inherits: true;
    }

    @property --j0 {
      syntax: "<number>";
      initial-value: 0;
      inherits: true;
    }

    @property --k0 {
      syntax: "<number>";
      initial-value: 0;
      inherits: true;
    }

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;
    --i0: 0.25;
    --j0: 0.15;
    --k0: 0;
    --background: #52b600;
    display: grid;
    height: 200vh;
    background: var(--background);
    cursor: none;

    *,
    &::before {
      grid-column: 1;
      grid-row: 1;
    }

    --gradient-start: 17%;
    --gradient-end: 100%;
    --map: radial-gradient(circle at calc(var(--i0) * 100%) calc(var(--j0) * 100%),
      #777 var(--gradient-start),
      #000 var(--gradient-end));

      
      .center {
        z-index: 1000;
        position: absolute;
        left: 50%;
        top: 52%;
        opacity: 0;
        margin-left: -30px;
        margin-top: -15px;
      }

      
      .mouse-wheel {
        z-index: 1000;
        width: 30px;
        height: 60px;
        border-radius: 20px;
        background-color: transparent;
        opacity: O;
        border: 3px solid #52b600;
        &:after {
          z-index: 1000;
          content: "";
          width: 4px;
          height: 10px;
          position: absolute;
          border-radius: 50px;
          left: 50%;
          top: 10px;
          background: #52b600;
          border-top: 3px solid #52b600;
          transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          animation: scroll-wheel 1s infinite;
          -webkit-animation: scroll-wheel 1s infinite;
          animation-delay: 0s;
          -webkit-animation-delay: 0s;
        }
      }
      
      @keyframes scroll-wheel {
        0% {
          top: 10px;
          height: 10px; 
        }
        50% {
          top: 20px;
          height: 5px; 
        }
        100% {
          top: 10px;
          height: 10px; 
        }
      } 
`;

export const Halftone = styled.div`
place-self: stretch;
position: relative;
z-index: 1;
background: var(--map,
    linear-gradient(calc(var(--k0) * 360deg), #777 9%, #000)),
  var(--pattern, radial-gradient(closest-corner, #888, #000) 0 / 1em 1em round);
background-blend-mode: screen;
mix-blend-mode: multiply;
filter: contrast(20);
`;



export const Work = styled.h2`
color: #52b600;
font-weight: 600;
font-size: 2em;
mix-blend-mode: difference;
width: auto;
height: auto;
line-height: 1.2em;
transform: none;
z-index: 4;
margin: 0px;
opacity: 0;
clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
 .char {
  transform: translateY(115px);
  transition: transform .5s;
 }
`;



