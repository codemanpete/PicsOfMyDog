import React from 'react';
import { withRouter } from 'react-router';
import OwnerLink from './owner_link';
import TaggingContainer from './tagging_container';
import NewCommentFormContainer from './new_comment_form_container';
import PhotoComments from './photo_comments';
import { Link } from 'react-router';

class PhotoView extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchPhoto(this.props.params.photoId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.params.photoId !== nextProps.params.photoId) {
  //     this.props.fetchPhoto(this.props.params.photoId);
  //   }
  // }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePhoto(this.props.photo.id);
    this.props.router.push(`/users/${this.props.currentUser.id}`);
  }


  render() {
    let photo = this.props.photo;
    return(
      <div className="main_container">
        <div className="photo_container">
          <img className="photo" src={photo.photo_url} alt={photo.title} />
        </div>
        <div className="sidebar_container">
          <section className="photo_owner">
            <OwnerLink owner_id={photo.owner_id} owner={photo.owner} />
            <br />
            <button onClick={ this.handleDelete }>Delete</button>
          </section>
          <section className="tagging_container">
            <TaggingContainer photo={photo} />
          </section>
          <section>
            <NewCommentFormContainer photo_id={photo.id} />
          </section>
          <section>
            <PhotoComments comments={photo.comments} />
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoView);
