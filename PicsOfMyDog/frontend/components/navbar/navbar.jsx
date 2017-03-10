import React from 'react';
import { Link } from 'react-router';

const loggedOutBar = () => (
  <div className="navbar">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up</Link>
  </div>
);

const loggedInBar = (currentUser, logout) => (
  <div className="navbar">
    <h2>Welcome, { currentUser.username }</h2>
    <button onClick={logout}>Log Out</button>
  </div>
);

const Navbar = ({ currentUser, logout }) => (
  currentUser ? loggedInBar(currentUser, logout) : loggedOutBar()
);

export default Navbar;
