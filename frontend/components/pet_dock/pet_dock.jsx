import React from 'react';
import Modal from 'react-modal';
import PetListItem from './pet_list_item';

class PetDock extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.createPetLink = this.createPetLink.bind(this);
    this.createPetModal = this.createPetModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
    this.state = {
      pet_name: "",
      createPetModalOpen: false
    };
    this.props.requestUserPets(this.props.userId);
  }

  openModal() {
    this.setState({createPetModalOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({createPetModalOpen: false});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    const pet = {
      pet_name: this.state.pet_name,
      user_id: this.props.userId
    };
    this.props.createPet({ pet });
    this.setState({
      pet_name: "",
      createPetModalOpen: false
    });
  }

  createPetModal() {
    return(
      <Modal
        isOpen={this.state.createPetModalOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Create Pet">
        <label> Name:
          <input type="text"
            value={this.state.pet_name}
            onChange={this.update('pet_name')} />
        </label>
        <button onClick={this.handleClick}>Create Pet</button>
      </Modal>
    );
  }

  createPetLink() {
    if (!this.props.currentUser) {
      return;
    } else if (this.props.userId === this.props.currentUser.id) {
      return(
        <li className="card" onClick={this.openModal}>
          <div className="create-icon"></div>
          <p className="create-text">Create a Pet Profile</p>
        </li>
      );
    }
  }

  render () {
    return (
      <div className="pet-dock-container">
        <ul className="pet-dock-list">
          { this.createPetLink() }
          {this.props.pets.map(pet => <PetListItem key={pet.id} pet={pet} />)}
        </ul>
        { this.createPetModal() }
      </div>
    );
  }
}

export default PetDock;
