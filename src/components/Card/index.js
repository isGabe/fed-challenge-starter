import React, { useEffect, useState } from 'react';
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
    avatarUrl,
    distance,
    handleClick,
    imgUrl,
    count,
    isActive,
    moreUrl,
    time,
    title,
    workouts,
  } = props;

  const workoutsCount = workouts.length;
  const imgPath = `${process.env.PUBLIC_URL}/assets`;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Wrapper
      isActive={isActive}
      onClick={handleClick}
      isLoaded={isLoaded}
      count={count}
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
  distance: null,
  moreUrl: '',
  time: '',
  workouts: [],
}

Card.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  distance: PropTypes.shape({
    value: PropTypes.string,
    units: PropTypes.string,
  }),
  imgUrl: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  moreUrl: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string.isRequired,
  workouts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Card;
