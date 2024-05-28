import styled from "styled-components";

export const Welcome = styled.section`
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
    --background: #000;
    display: grid;
    height: 200vh;
    background: var(--background);
    cursor: none;

    *,
    &::before {
      grid-column: 1;
      grid-row: 1;
    }

    /* --gradient-start: 7.5%;
    --gradient-end: 30%; */
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
