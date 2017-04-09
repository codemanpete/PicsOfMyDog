export const createPet = (pet) => {
  return $.ajax({
    method: 'POST',
    url: '/api/pets',
    data: pet
  });
};

export const fetchUserPets = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/pets`
  });
};
