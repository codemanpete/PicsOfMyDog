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
        <div className="navbar middle-bar clearfix">
          <ul className="clearfix mid-nav">
            <li>
              <a className={`${this.state.selected === "photos" ? 'selected-link' : ''} nav-button`} onClick={this.setSelected("photos")}>PHOTOS</a>
            </li>
            <li>
              <a className={`${this.state.selected === "pets" ? 'selected-link' : ''} nav-button`} onClick={this.setSelected("pets")}>PETS</a>
            </li>
          </ul>
        </div>
        {this.selectedComponent()}
      </div>
    );
  }

}

export default ComponentNavBar;
