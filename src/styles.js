import styled from 'styled-components';
import { rem } from './utils/pxToRelative';

export const Wrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  letter-spacing: ${rem(0.3)};
  line-height: 1.2;
  margin: 0 auto;
  padding: ${rem(20)};

  @media (min-width: 32rem) {
    display: grid;
    grid-auto-rows: 1fr;
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
