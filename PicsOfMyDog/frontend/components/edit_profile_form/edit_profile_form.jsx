import React from 'react';
import { Link, withRouter } from 'react-router';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.state = this.props.user;
    console.log(this.state);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navigateToProfile() {
    this.props.router.push(`/users/${this.props.user.id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.editUser(user);
    this.navigateToProfile();
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
        <br/>
        <h2>{this.state.username}, edit your profile</h2>
        <br/>
        <label> Name:
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')} />
        </label>
        <br/>
        <textarea
          cols='30'
          rows='10'
          value={this.state.biography}
          onChange={this.update('biography')}></textarea>
        <br/>
        <button type="submit" name="action" value="Submit">Submit</button>
        <button onClick={ this.navigateToProfile }>Cancel</button>
      </form>
    );
  }
}

export default withRouter(EditProfileForm);
