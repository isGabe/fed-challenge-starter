import styled from 'styled-components';
import { rem } from './utils/pxToRelative';

export const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  letter-spacing: ${rem(0.3)};
  margin: 0 auto;
  max-width: 90vw;
  padding: 60px 0;

  @media (min-width: 32rem) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${rem(20)};
  }

  @media (min-width: 48rem) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 80vw;
  }

  @media (min-width: 64rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 80rem) {
    grid-gap: ${rem(30)};
  }
`;
