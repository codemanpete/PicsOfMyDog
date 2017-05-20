import { connect } from 'react-redux';
import PetDock from './pet_dock';
import { createPet, requestUserPets } from '../../actions/pet_actions';
import { selectAllPets } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  pets: selectAllPets(state)
});

const mapDispatchToProps = dispatch => ({
  createPet: (pet) => dispatch(createPet(pet)),
  requestUserPets: (id) => dispatch(requestUserPets(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetDock);
