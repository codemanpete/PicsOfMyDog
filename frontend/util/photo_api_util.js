export const postPhoto = (photo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: photo
  });
};

export const fetchPhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/photos/${id}`
  });
};

export const fetchAllPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/photos'
  });
};

export const fetchUserPhotos = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/photos`
  });
};

export const createTagging = (tagging) => {
  return $.ajax({
    method: 'POST',
    url: '/api/taggings',
    data: { tagging }
  });
};

export const fetchPetsPhotos = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pets/${id}/photos`
  });
};

export const fetchOwner = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};
