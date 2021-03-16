import styled from 'styled-components';
import { rem } from './utils/pxToRelative';

export const Wrapper = styled.div`
  display: grid;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  letter-spacing: ${rem(0.3)};
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  max-width: 80vw;
  padding: 60px 0;
`;
