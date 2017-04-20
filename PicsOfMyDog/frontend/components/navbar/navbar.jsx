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
  <div className="navbar clearfix">
    <ul className="clearfix">
      <li>
        <Link className="button" to="/photos">500Picsofmydog</Link>
      </li>
      <li>
        <span className="button">(Search Bar)</span>
      </li>
    </ul>
    <ul style={{float: "right"}}>
      <li>
        <Link className="button" to={`/users/${currentUser.id}`}>Profile</Link>
      </li>
      <li>
        <Link className="button" to="/edit-profile">Edit Profile</Link>
      </li>
      <li>
        <button className="button" onClick={logout}>Log Out</button>
      </li>
      <li>
        <UploadButton currentUser={currentUser} postPhoto={postPhoto} />
      </li>
    </ul>
  </div>
);

const Navbar = ({ currentUser, logout, postPhoto }) => (
  currentUser ? loggedInBar(currentUser, logout, postPhoto) : loggedOutBar()
);

export default Navbar;
