import React from 'react';
import { Link } from 'react-router';

class Tagging extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.showTags = this.showTags.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  componentWillMount() {
    this.props.requestUserPets(this.props.currentUser.id);
  }

  taggingButton() {
    if (!this.props.currentUser) {
      return;
    }
    else if (this.props.currentUser.id === this.props.photo.owner_id) {
      return (
        <div>
          <button onClick={ this.buttonClicked }>Tag Photo</button>
          { this.showTags() }
        </div>
      );
    }
  }

  showTags() {
    let taggedPetIds = this.props.photo.taggings.map(function(tag) {return tag.pet_id;});
    let untaggedPets = this.props.pets.filter(
      pet => !(taggedPetIds.includes(pet.id))
    );
    if (this.state.clicked) {
      return(
        <div>
          <ul>
            {untaggedPets.map(pet => (
              <li>
                <button onClick={ this.createTag(pet) }>{pet.pet_name}</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  createTag(pet) {
    return (e) => {
      e.preventDefault();
      this.props.createTagging(
        {
          pet_id: pet.id,
          photo_id: this.props.photo.id
        }
      );
    };
  }

  buttonClicked(e) {
    e.preventDefault();
    if (this.state.clicked) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            { this.props.photo.taggings.map(tag =>
              <li key={tag.pet_id}>
                <Link to={`/pets/${tag.pet_id}/photos`}>{tag.pet_name}</Link>
              </li>
            )}
          </ul>
        </div>
        { this.taggingButton() }
      </div>
    );
  }

}

export default Tagging;
