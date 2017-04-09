import React from 'react';
import { withRouter } from 'react-router';
import PhotoListContainer from '../photo_list/photo_list_container';
import PetDockContainer from '../pet_dock/pet_dock_container';

class ProfileShow extends React.Component {

  componentWillMount() {
    this.props.fetchUser(this.props.params.userId);
  }

  render() {
    return(
      <div>
        <h1>This is your profile</h1>
        <h2>{this.props.viewUser.username}</h2>
        <h2>{this.props.viewUser.name}</h2>
        <h4>{this.props.viewUser.biography}</h4>
        <PhotoListContainer userId={this.props.params.userId} />
        <br />
        <PetDockContainer userId={this.props.params.userId} />
      </div>
    );
  }
}

export default withRouter(ProfileShow);
