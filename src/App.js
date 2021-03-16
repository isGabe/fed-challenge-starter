import React from 'react';
import data from './data';
import WebFontLoader from 'webfontloader'
import { Wrapper } from  './styles';
import Card from './components/Card';

function App() {
  WebFontLoader.load({
    google: {
      families: ['Open+Sans:700,800']
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
        avatarUrl={avatarUrl}
        distance={distance}
        imgUrl={imgUrl || 'https://placekitten.com/600/400'}
        key={title}
        moreUrl={moreUrl}
        time={time}
        title={title}
        workouts={workouts}
      />
    ))}
    </Wrapper>
  );
}

export default App;
