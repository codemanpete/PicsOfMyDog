import React from 'react';
import PhotoListItem from './photo_list_item';

class PhotoList extends React.Component {
  componentDidMount() {
    if (this.props.userId) {
      this.props.requestUserPhotos(this.props.userId);
    } else {
      this.props.requestAllPhotos();
    }
  }

  render() {
    const { photos, children } = this.props;
    return (
      <div>
        <ul>
          {photos.map(photo => <PhotoListItem key={photo.id} photo={photo} />)}
        </ul>
        {children}
      </div>
    );
  }
}

export default PhotoList;
