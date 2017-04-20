import { connect } from 'react-redux';
import PhotoList from './photo_list';
import {
  requestAllPhotos,
  requestUserPhotos,
  requestPetsPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  photos: selectAllPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPhotos: () => dispatch(requestAllPhotos()),
  requestUserPhotos: (id) => dispatch(requestUserPhotos(id)),
  requestPetsPhotos: (id) => dispatch(requestPetsPhotos(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);
