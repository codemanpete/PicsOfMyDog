import { connect } from 'react-redux';
import { editUser } from '../../actions/profile_actions';

import EditProfileForm from './edit_profile_form';

const mapStateToProps = ({ session }) => ({
  user: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  editUser: (user) => dispatch(editUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileForm);
