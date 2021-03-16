import React from 'react';
import data from './data';
import WebFontLoader from 'webfontloader'
import { Wrapper } from  './styles';
import Card from './components/Card';

function App() {
  WebFontLoader.load({
    google: {
      families: ['Open+Sans:700:latin-ext']
    }
  })
  return (
    <Wrapper>
    {data.map(({
      title,
      imgUrl,
      avatarUrl,
      time,
      distance,
      moreUrl,
      workouts,
    }) => (
      <Card
        title={title}
        imgUrl={imgUrl || 'https://placekitten.com/600/400'}
        avatarUrl={avatarUrl}
        time={time}
        distance={distance}
        moreUrl={moreUrl}
        workouts={workouts}
      />
    ))}
    </Wrapper>
  );
}

export default App;
