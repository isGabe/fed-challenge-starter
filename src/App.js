import React from 'react';
import data from './data';
import './App.css';
import { Wrapper } from  './styles';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
