import React from 'react';
import { withRouter } from 'react-router';
import OwnerLink from './owner_link';
import TaggingContainer from './tagging_container';

class PhotoView extends React.Component {

  componentWillMount() {
    this.props.fetchPhoto(this.props.params.photoId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.params.photoId !== nextProps.params.photoId) {
  //     this.props.fetchPhoto(this.props.params.photoId);
  //   }
  // }


  render() {
    let photo = this.props.photo;
    return(
      <div className="main_container">
        <div className="photo_container">
          <img className="photo" src={photo.photo_url} alt={photo.title} />
        </div>
        <div className="sidebar_container">
          <div>
            <OwnerLink owner_id={photo.owner_id} owner_name={photo.owner_name} />
          </div>
          <TaggingContainer photo={photo} />
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoView);
