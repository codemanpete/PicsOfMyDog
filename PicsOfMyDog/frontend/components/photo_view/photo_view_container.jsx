import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';

import PhotoView from './photo_view';

const mapStateToProps = ({ photo, session }) => ({
  photo,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoView);
