import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as PlaylistIcon } from '../../icons/icon-playlist.svg';
import { ReactComponent as TimerIcon } from '../../icons/icon-timer.svg';
import { ReactComponent as DistanceIcon } from '../../icons/icon-distance.svg';

import {
  Wrapper,
  ImageWrapper,
  Workouts,
  Content,
  Heading,
  Avatar,
  Meta,
  Time,
  Distance,
  MoreLink,
} from  './styles';

const Card = (props) => {
  const {
    title,
    imgUrl,
    avatarUrl,
    time,
    distance,
    handleClick,
    moreUrl,
    workouts,
  } = props;

  const workoutsCount = workouts.length;
  const imgPath = `${process.env.PUBLIC_URL}/assets`;

  return (
    <Wrapper
      isActive={isActive}
      onClick={handleClick}
    >
      <ImageWrapper>
        <img src={`${imgPath}/${imgUrl}`} alt="" />
        {workoutsCount > 0 ? (
          <Workouts>
            <span className="workoutsCount">{workoutsCount}</span>
            <span className="workoutsText">Workouts</span>
            <PlaylistIcon />
          </Workouts>
        ) : null}
      </ImageWrapper>
      <Content>
        <Heading>{title}</Heading>
        <Avatar>
          <img src={`${imgPath}/avatars/${avatarUrl}`} alt=""/>
        </Avatar>
        {distance || time ? (
          <Meta>
            <Time>
              <TimerIcon />
              {time}
            </Time>
            <Distance>
              <DistanceIcon />
              <span className="distanceValue">{distance.value}</span>
              <span className="distanceUnits">{distance.units}</span>
            </Distance>
          </Meta>
        ) : null}
        {moreUrl ? (
          <MoreLink href={moreUrl}>View Details</MoreLink>
        ) : null }
      </Content>
    </Wrapper>
  );
};

Card.defaultProps = {
  time: '',
  distance: null,
  moreUrl: '',
  workouts: [],
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  time: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  distance: PropTypes.shape({
    value: PropTypes.string,
    units: PropTypes.string,
  }),
  moreUrl: PropTypes.string,
  workouts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Card;
