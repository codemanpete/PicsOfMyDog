import React from 'react';
import { withRouter } from 'react-router';
import OwnerLink from './owner_link';

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
    return(
      <div>
        <img src={this.props.photo.photo_url} alt={this.props.photo.title} />
        <div>
          <OwnerLink owner_id={this.props.photo.owner_id} owner_name={this.props.photo.owner_name} />
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoView);
