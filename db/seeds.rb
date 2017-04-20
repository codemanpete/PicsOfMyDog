User.create(
  username: 'example',
  password_digest: BCrypt::Password.create("password")
)

Photo.create(
  photo_url: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2013/09/chompers151.jpg',
  title: 'Lovely Corgi',
  owner_id: 1
)

Photo.create(
  photo_url: 'http://buddysdaycare.com/wp-content/uploads/2014/10/ServiceHP1.jpg',
  title: 'Amazing Dog',
  owner_id: 3
)

Pet.create(
  pet_name: "billy",
  user_id: 3
)
