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
`;
