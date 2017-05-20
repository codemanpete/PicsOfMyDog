import React from 'react';
import PetListItem from './pet_list_item';

class PetDock extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.createPetForm = this.createPetForm.bind(this);
  }

  componentWillMount() {
    this.state = {
      pet_name: "",
      user_id: this.props.userId
    };
    this.props.requestUserPets(this.props.userId);
  }

  componentWillReceiveProps() {
    // this.props.requestUserPets(this.props.userId);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    const petus = this.state;
    this.props.createPet({ pet: petus });
    this.setState({
      pet_name: "",
      user_id: this.props.userId
    });
  }

  createPetForm() {
    if (!this.props.currentUser) {
      return;
    } else if (this.props.userId === this.props.currentUser.id) {
      return(
        <div>
          <label> Name:
          <input type="text"
            value={this.state.pet_name}
            onChange={this.update('pet_name')} />
          </label>
          <br />
          <button onClick={this.handleClick}>Create Pet</button>
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.pets.map(pet => <PetListItem key={pet.id} pet={pet} />)}
        </ul>
        { this.createPetForm() }
      </div>
    );
  }
}

export default PetDock;
