import { connect } from 'react-redux';
import { requestOwner } from '../../actions/photo_actions';
import OwnerLink from './owner_link';

const mapStateToProps = state => ({
  owner: state.photo.owner
});

const mapDispatchToProps = dispatch => ({
  requestOwner: (id) => dispatch(requestOwner(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnerLink);
