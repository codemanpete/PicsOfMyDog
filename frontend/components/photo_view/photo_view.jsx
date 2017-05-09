import React from 'react';
import { withRouter } from 'react-router';
import OwnerLink from './owner_link';
import TaggingContainer from './tagging_container';
import NewCommentFormContainer from './new_comment_form_container';
import { Link } from 'react-router';

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
    console.log(photo);
    return(
      <div className="main_container">
        <div className="photo_container">
          <img className="photo" src={photo.photo_url} alt={photo.title} />
        </div>
        <div className="sidebar_container">
          <section className="photo_owner">
            <OwnerLink owner_id={photo.owner_id} owner={photo.owner} />
          </section>
          <section className="tagging_container">
            <TaggingContainer photo={photo} />
          </section>
          <section>
            <NewCommentFormContainer current_user_id={this.props.currentUser.id} photo_id={photo.id} />
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoView);
