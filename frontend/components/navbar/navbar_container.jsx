import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { postPhoto } from '../../actions/photo_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  postPhoto: (photo) => dispatch(postPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
