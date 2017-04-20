import { values } from 'lodash';

export const selectAllPhotos = ({ photoList }) => values(photoList);
export const selectAllPets = ({ pets }) => values(pets);
