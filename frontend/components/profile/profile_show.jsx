import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';
import PhotoListContainer from '../photo_list/photo_list_container';
import PetDockContainer from '../pet_dock/pet_dock_container';
import EditProfileFormContainer from '../edit_profile_form/edit_profile_form_container';
import ComponentNavBar from './component_nav_bar';

const appElement = document.getElementById('root');

const customStyle = {
  content: {
    width: '580px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
};

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
        <section className="profile_header">
          <div className="cover_area"></div>
          <img className="profile-pic" src={this.props.viewUser.profile_pic_url} alt="Profile Picture" />
          <button onClick={this.openModal}>Edit your profile</button>
          <div className="user_details">
            <h1>{this.props.viewUser.name}</h1>
            <p>{this.props.viewUser.biography}</p>
          </div>
        </section>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Edit Profile"
          style={customStyle}
          >
          <EditProfileFormContainer closeModal={this.closeModal} />
          <button onClick={this.closeModal}>close</button>
        </Modal>
        <ComponentNavBar userId={this.props.params.userId}/>

      </div>
    );
  }
}

export default withRouter(ProfileShow);
