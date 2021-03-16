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
    moreUrl,
    workouts,
  } = props;

  const workoutsCount = workouts.length;
  const imgPath = `${process.env.PUBLIC_URL}/assets`;

  return (
    <Wrapper>
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
              <span className="distaceValue">{distance.value}</span>
              <span className="distaceUnits">{distance.units}</span>
            </Distance>
          </Meta>
        ) : null}
        <MoreLink href={moreUrl}>View Details</MoreLink>
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
  distance: PropTypes.shape({
    value: PropTypes.string,
    units: PropTypes.string,
  }),
  moreUrl: PropTypes.string,
  workouts: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Card;
