import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestSignIn = this.handleGuestSignIn.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) {
      this.props.router.push("/photos");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  alternativeLink() {
    if (this.props.formType === "login") {
      return(
        <div className="alternative-link">
          Don't have an account? <Link className="blue-link" to="/signup">Sign up</Link>
        </div>
      );
    } else {
      return(
        <div className="alternative-link">
          Already have an account? <Link className="blue-link" to="/login">Log in</Link>
        </div>
      );
    }
  }

  handleGuestSignIn() {
    this.props.login({ user: {
      username: "example",
      password: "password"
    }});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{ error }</li>
        ))}
      </ul>
    );
  }

  renderHeader() {
    if (this.props.formType === "login") {
      return <h1>Login to 500Picsofmydog</h1>;
    } else {
      return <h1>Join 500Picsofmydog</h1>;
    }
  }

  render() {
    return(
      <div className="session-background">
        <div className="session-box">
          {this.renderHeader()}
          <div>
            <form onSubmit={this.handleSubmit}>
              {this.renderErrors()}
              <div>
                <label>Username</label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')} />
              </div>
              <div>
                <label>Password</label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')} />
              </div>
              <button className="session-box-button green-button" type="submit" name="action" value="Submit">{this.props.formType}</button>
            </form>
          </div>
          <a className="session-box-button blue-button" href="/" onClick={this.handleGuestSignIn}>Continue as Guest</a>
          {this.alternativeLink()}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
