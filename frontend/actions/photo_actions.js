import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";
export const RECEIVE_OWNER = "RECEIVE_OWNER";

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receiveAllPhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const receiveTagging = (tagging) => ({
  type: RECEIVE_TAGGING,
  tagging
});

export const receiveOwner = owner => ({
  type: RECEIVE_OWNER,
  owner
});

export const requestAllPhotos = () => (dispatch) => (
  APIUtil.fetchAllPhotos().then(
    photos => dispatch(receiveAllPhotos(photos))
  )
);

export const requestUserPhotos = (id) => (dispatch) => (
  APIUtil.fetchUserPhotos(id).then(
    photos => dispatch(receiveAllPhotos(photos))
  )
);

export const requestPetsPhotos = (id) => dispatch => (
  APIUtil.fetchPetsPhotos(id).then(
    photos => dispatch(receiveAllPhotos(photos))
  )
);

export const fetchPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id).then(
    (photo) => dispatch(receivePhoto(photo))
  )
);

export const postPhoto = photo => dispatch => (
  APIUtil.postPhoto(photo).then(
    (newPhoto) => dispatch(receivePhoto(newPhoto))
  )
);

export const createTagging = tagging => dispatch => (
  APIUtil.createTagging(tagging).then(
    (updatedPhoto) => dispatch(receivePhoto(updatedPhoto))
  )
);

export const requestOwner = id => dispatch => (
  APIUtil.fetchOwner(id).then(
    (owner) => dispatch(receiveOwner(owner))
  )
);
