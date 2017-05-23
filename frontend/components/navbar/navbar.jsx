import React from 'react';
import { Link, withRouter } from 'react-router';
import UploadButton from './upload_button';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loggedOutBar() {
    return(
      <div className="navbar clearfix">
        <ul className="clearfix">
          <li>
            <Link className="nav-button" to="/photos">500Picsofmydog</Link>
          </li>
        </ul>
        <ul className="clearfix" style={{float: "right"}}>
          <li>
            <Link className="nav-button" to="/login">Login</Link>
          </li>
          <li>
            <Link className="nav-button" to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }

  loggedInBar() {
    return(
      <div className="navbar clearfix">
        <ul className="clearfix">
          <li>
            <Link className="nav-button" to="/photos">500Picsofmydog</Link>
          </li>
        </ul>
        <ul style={{float: "right"}}>
          <li>
            <Link className="nav-button" to={`/users/${this.props.currentUser.id}`}>Profile</Link>
          </li>
          <li>
            <a className="nav-button" onClick={this.handleLogout}>Log Out</a>
          </li>
          <li>
            <UploadButton currentUser={this.props.currentUser} postPhoto={this.props.postPhoto} />
          </li>
        </ul>
      </div>
    );
  }

  handleLogout() {
    this.props.logout().then( () => this.props.router.push("/welcome"));
  }

  render() {
    return(
      this.props.currentUser ? this.loggedInBar() : this.loggedOutBar()
    );
  }
}

export default withRouter(Navbar);
