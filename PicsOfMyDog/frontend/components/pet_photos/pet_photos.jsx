import React from 'react';
import PhotoListContainer from '../photo_list/photo_list_container';

class PetPhotos extends React.Component {
  render() {
    return(
      <div>
        <h1>Pet Name Here</h1>
        <PhotoListContainer petId={this.props.params.petId} />
      </div>
    );
  }
}

export default PetPhotos;
