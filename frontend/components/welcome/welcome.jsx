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

// <div className="about-me">
//   <p>500Picsofmydog is a 'pet' project by Peter Cheng to showcase his web development skills.</p>
//   <p>He used Rails for the backend and React/Redux for the frontend.</p>
//   <p>Follow these links to get in touch with Peter, find out more about what he does and hire him.</p>
//   <a href="https://www.linkedin.com/in/peter-cheng-392266131/">LinkedIn</a>
//   <br />
//   <a href="https://github.com/shadypeet">Github</a>
//   <br />
//   <a href="mailto:peter.yc.cheng@gmail.com">Gmail</a>
// </div>
