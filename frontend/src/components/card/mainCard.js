import React from 'react';
import CardComponent from './card';
import cardData from './cardData.json';

const MainComponent = () => {
  return (
    <div>
      {cardData.map((data) => (
        <CardComponent key={data.id} cardData={data} />
      ))}
    </div>
  );
};

export default MainComponent;

