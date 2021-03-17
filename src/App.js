import React, { useState } from 'react';
import data from './data';
import WebFontLoader from 'webfontloader'
import { Wrapper } from  './styles';
import Card from './components/Card';

function App() {
  WebFontLoader.load({
    google: {
      families: ['Open+Sans:700,800']
    }
  });

  const [activeCard, setActiveCard] = useState(null);

  return (
    <Wrapper>
    {data.map(({
      avatarUrl,
      distance,
      imgUrl,
      moreUrl,
      time,
      title,
      workouts,
    }, idx) => (
      <Card
        avatarUrl={avatarUrl}
        distance={distance}
        imgUrl={imgUrl}
        handleClick={() => setActiveCard(idx)}
        isActive={activeCard === idx}
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
