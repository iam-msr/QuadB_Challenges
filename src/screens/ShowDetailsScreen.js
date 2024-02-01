// src/screens/ShowDetailsScreen.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import MovieForm from '../components/common/MovieForm';

const ShowDetailsScreen = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);


  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowDetails(data));
  }, [id]);

  const handleBookTicket = () => {
    // Open the form when the button is clicked
    setIsFormOpen(true);
    // Logic to open the form with movie details and book ticket
    // You can use local/session storage for storing user details
    console.log('Booking ticket for:', showDetails.name);
  };

  const handleCloseForm = () => {
    // Close the form when needed
    setIsFormOpen(false);
  };
 

  return (
    <div>
      {showDetails ? (
        <div>
          <h2>{showDetails.name}</h2>
          <Link to="/">Go Back</Link>
          <br/>
          <img src={showDetails.image.original} alt={showDetails.name} />
          <h3>Language: {showDetails.language}</h3>
          <h3>Summary</h3>
          <p dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
          <Button onClick={handleBookTicket}>Book Ticket</Button>
          <br/>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Render the MovieForm component if the form is open */}
      {isFormOpen && <MovieForm movieDetails={showDetails} onClose={handleCloseForm} />}
    </div>
  );
};

export default ShowDetailsScreen;
