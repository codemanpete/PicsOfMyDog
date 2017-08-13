import { connect } from 'react-redux';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';

import PhotoView from './photo_view';

const mapStateToProps = ({ photo, session }) => ({
  photo,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  deletePhoto: id => dispatch(deletePhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoView);
