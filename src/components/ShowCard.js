// src/components/ShowCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  return (
    <div key={show.id} style={{ margin: '12px', padding: '12px', border: '1px solid #ccc' }}>
      <div>
      <h3>{show.name}</h3>
      <div>
        <img src={show.image?.medium} alt={show.name} />
      </div>
      <p>Language: {show.language}</p>
      <p>Type: {show.type}</p>
      <p>Genre: {show.genres.join(', ')}</p>
      <p>Rating: {show.rating.average}</p>
      <Link to={{ pathname: `/show/${show.id}`, state: { show } }}>
        <button>View Details</button>
      </Link>
      
      </div>
    </div>
  );
};

export default ShowCard;
