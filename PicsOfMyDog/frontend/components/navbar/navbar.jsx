import React from 'react';
import { Link } from 'react-router';
import UploadButton from './upload_button';

const loggedOutBar = () => (
  <div className="navbar">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign Up</Link>
  </div>
);

const loggedInBar = (currentUser, logout, postPhoto) => (
  <div className="navbar">
    <h2>Welcome, { currentUser.username }</h2>
    <button onClick={logout}>Log Out</button>
    <UploadButton currentUser={currentUser} postPhoto={postPhoto} />
    <Link to="/edit-profile">Edit Profile</Link>
  </div>
);

const Navbar = ({ currentUser, logout, postPhoto }) => (
  currentUser ? loggedInBar(currentUser, logout, postPhoto) : loggedOutBar()
);

export default Navbar;
