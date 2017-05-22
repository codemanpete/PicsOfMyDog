import React from 'react';
import PhotoListContainer from '../photo_list/photo_list_container';
import PetDockContainer from '../pet_dock/pet_dock_container';

class ComponentNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "photos"
    };
    this.selectedComponent = this.selectedComponent.bind(this);
  }

  setSelected(field) {
    return (e) => {
      this.setState({
        selected: field
      });
    };
  }

  selectedComponent() {
    if(this.state.selected === "photos") {
      return(
        <div>
          <PhotoListContainer userId={this.props.userId} />
        </div>
      );
    } else if (this.state.selected === "pets") {
      return(
        <div>
          <PetDockContainer userId={parseInt(this.props.userId)} />
        </div>
      );
    } else {
      return;
    }
  }

  render() {
    return(
      <div>
        <ul>
          <li>
            <a onClick={this.setSelected("photos")}>PHOTOS</a>
          </li>
          <li>
            <a onClick={this.setSelected("pets")}>PETS</a>
          </li>
        </ul>
        {this.selectedComponent()}
      </div>
    );
  }

}

export default ComponentNavBar;
