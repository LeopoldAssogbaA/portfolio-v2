import styled from "styled-components";

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
