import { connect } from 'react-redux';
import { fetchUser } from '../../actions/profile_actions';

import ProfileShow from './profile_show';

const mapStateToProps = ({ profile }) => ({
  viewUser: profile.viewUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileShow);
