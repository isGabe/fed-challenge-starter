import styled from 'styled-components';
import { rem } from '../../utils/pxToRelative';

export const Wrapper = styled.div`
  border-radius: 4px;
  border: solid 1px #eee;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  overflow: hidden;

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
  grid-column: span 2;
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
