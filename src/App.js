// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router and Routes

import HomeScreen from './screens/HomeScreen';
import ShowDetailsScreen from './screens/ShowDetailsScreen';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/show/:id" element={<ShowDetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
