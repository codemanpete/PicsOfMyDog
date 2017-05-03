import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import PhotoListContainer from '../photo_list/photo_list_container';
import PetDockContainer from '../pet_dock/pet_dock_container';
import EditProfileFormContainer from '../edit_profile_form/edit_profile_form_container';
const appElement = document.getElementById('root');

class ProfileShow extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    this.props.fetchUser(this.props.params.userId);
    Modal.setAppElement('body');
  }

  render() {
    return(
      <div>
        <img className="profile-pic" src={this.props.viewUser.profile_pic_url} alt="Profile Picture" />
        <button onClick={this.openModal}>Edit Profile</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Edit Profile"
        >
          <EditProfileFormContainer closeModal={this.closeModal} />
          <button onClick={this.closeModal}>close</button>
        </Modal>
        <h2>{this.props.viewUser.name}</h2>
        <h4>{this.props.viewUser.biography}</h4>
        <PhotoListContainer userId={this.props.params.userId} />
        <br />
        <PetDockContainer userId={parseInt(this.props.params.userId)} />
      </div>
    );
  }
}

export default withRouter(ProfileShow);
