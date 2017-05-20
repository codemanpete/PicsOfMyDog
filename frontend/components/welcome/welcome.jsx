import React from 'react';
import { Link } from 'react-router';

const Welcome = () => {
  return (
    <div className="intro">
      <div className="intro-heading">
        <h1>Home to everyone's best photos</h1>
        <h2>Showcase your adventures with your favorite companion.</h2>
        <Link to="/signup" className="intro-button">Get Started</Link>
      </div>
    </div>
  );
};

export default Welcome;
