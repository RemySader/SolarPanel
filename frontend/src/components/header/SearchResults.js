// SearchResults.js
import React from 'react';
import CardComponent from '../card/card'; // Import your CardComponent

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((solarPanel) => (
        <CardComponent key={solarPanel.id} cardData={solarPanel} />
      ))}
    </div>
  );
};

export default SearchResults;
