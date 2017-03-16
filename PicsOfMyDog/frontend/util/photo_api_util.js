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
