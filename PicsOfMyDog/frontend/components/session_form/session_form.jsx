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
    this.guestSignIn = this.guestSignIn.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) {
      this.props.router.push("/");
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
      return <Link to="/signup">Sign up instead</Link>;
    } else {
      return <Link to="/login">Log in instead</Link>;
    }
  }

  guestButton() {
    if (this.props.formType === "login") {
      return <button onClick={this.guestSignIn}>Guest Sign In</button>;
    }
  }

  guestSignIn() {
    this.setState({
      username: "example",
      password: "password"
    });
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

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Welcome to 500 Pics of my Dog!
        <br/>
        Please {this.props.formType} or {this.alternativeLink()}
        {this.renderErrors()}
        <br/>
        <label> Username:
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')} />
        </label>
        <br/>
        <label> Password:
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')} />
        </label>
        <br/>

        <button type="submit" name="action" value="Submit">Submit</button>
        {this.guestButton()}
      </form>
    );
  }
}

export default withRouter(SessionForm);
