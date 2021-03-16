import React from 'react';
import './App.css';
import {
  Wrapper,
  Card,
  ImageWrapper,
  Content,
  Heading,
  Avatar,
  Meta,
  Time,
  Distance,
  MoreLink,
} from  './styles';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Card>
          <ImageWrapper>
            <img src="https://placekitten.com/600x300" />
          </ImageWrapper>
          <Content>
            <Heading>

            </Heading>
            <Avatar></Avatar>
            <Meta>
              <Time></Time>
              <Distance></Distance>
            </Meta>
            <MoreLink></MoreLink>
          </Content>
        </Card>
      </Wrapper>
    </div>
  );
}

export default App;
