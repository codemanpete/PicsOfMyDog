import React from 'react';
import { withRouter } from 'react-router';

class PhotoShow extends React.Component {

  componentWillMount() {
    this.props.fetchPhoto(this.props.params.photoId);
    // console.log(this.props.params.photoId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.photoId !== nextProps.params.photoId) {
      this.props.fetchPhoto(this.props.params.photoId);
    }
  }

  render() {
    return(
      <div>
        <img src={this.props.photo.photo_url} alt={this.props.photo.title} />
      </div>
    );
  }
}

export default withRouter(PhotoShow);
