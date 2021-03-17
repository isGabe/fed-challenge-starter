import styled from 'styled-components';
import { rem } from '../../utils/pxToRelative';

const bigShadow = `
  0 0.6px 0.5px rgba(0, 0, 0, 0.005),
  0 1.3px 1.1px rgba(0, 0, 0, 0.018),
  0 2.5px 2.1px rgba(0, 0, 0, 0.034),
  0 4.5px 3.8px rgba(0, 0, 0, 0.05),
  0 8.4px 7.1px rgba(0, 0, 0, 0.065),
  0 20px 17px rgba(0, 0, 0, 0.07)
`;

const smallShadow = `0px 1px 1px rgba(0,0,0,0.4)`;

export const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: ${({ isActive }) => (isActive ? bigShadow : smallShadow)};
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  img {
    display: block;
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Workouts = styled.div`
  background-color: rgba(0,0,0,0.5);
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 38%;

  .workoutsCount {
    font-weight: 800;
    font-size: ${rem(24)};
    margin-bottom: ${rem(10)};
    line-height: 1;
  }

  .workoutsText {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: ${rem(10)};
  }

  svg {
    width: 24px;

    path {
      fill: #fff
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 28px;
  grid-gap: 10px;
  padding: 20px;
`;

export const Heading = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

export const Avatar = styled.div`

  img {
    border-radius: 4px;
  }
`;

export const Meta = styled.div`
  grid-column: span 2;
  font-size: ${rem(10)};

  svg {
    width: 10px;
    margin-right: 5px;
  }
`;

export const Time = styled.span`
  margin-right: 10px;


`;

export const Distance = styled.span`
  .distanceValue {
    margin-right: 3px;
  }

  .distanceUnits {
    text-transform: uppercase;
  }
`;

export const MoreLink = styled.a`
  color: #0069D2;
  font-size: ${rem(14)};
  grid-column: span 1;
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
