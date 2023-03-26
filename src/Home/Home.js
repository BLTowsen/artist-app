import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div className="home-page">
      <h1>Welcome to the World of Music</h1>
      <Link to="/search">Browse All Artists</Link>
    </div>
  );
}

export default HomePage;
