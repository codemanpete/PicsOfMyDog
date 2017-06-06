import React from 'react';
import PhotoListItem from './photo_list_item';

class PhotoList extends React.Component {
  componentDidMount() {
    if (this.props.userId) {
      this.props.requestUserPhotos(this.props.userId);
    } else if (this.props.petId) {
      this.props.requestPetsPhotos(this.props.petId);
    } else {
      this.props.requestAllPhotos();
    }
  }

  render() {
    const { photos, children } = this.props;
    return (
      <div className="list_container">
        <div className="list_photos">
          {photos.map(photo => <PhotoListItem key={photo.id} photo={photo} />)}
          {children}
        </div>
      </div>
    );
  }
}

export default PhotoList;
