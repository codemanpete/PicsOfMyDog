import React from 'react';
import { withRouter } from 'react-router';

class ProfileShow extends React.Component {

  componentWillMount() {
    this.props.fetchUser(this.props.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      this.props.fetchUser(this.props.params.userId);
    }
  }

  render() {
    return(
      <div>
        <h1>This is your profile</h1>
        <h2>{this.props.viewUser.username}</h2>
        <h2>{this.props.viewUser.name}</h2>
        <h4>{this.props.viewUser.biography}</h4>
      </div>
    );
  }
}

export default withRouter(ProfileShow);
