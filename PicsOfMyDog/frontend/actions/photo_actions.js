import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const fetchPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id).then(
    (photo) => dispatch(receivePhoto(photo))
  )
);

export const postPhoto = photo => dispatch => (
  APIUtil.postPhoto(photo).then(
    () => dispatch(receivePhoto(photo))
  )
);
