import { connect } from 'react-redux';
import { requestUserPets } from '../../actions/pet_actions';
import { selectAllPets } from '../../reducers/selectors';
import { createTagging } from '../../actions/photo_actions';

import Tagging from './tagging';

const mapStateToProps = (state) => ({
  pets: selectAllPets(state),
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  requestUserPets: (id) => dispatch(requestUserPets(id)),
  createTagging: (tagging) => dispatch(createTagging(tagging))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tagging);
