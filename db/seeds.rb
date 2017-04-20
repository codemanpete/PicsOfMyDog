User.create(
  username: 'example',
  password_digest: BCrypt::Password.create("password")
)

Photo.create(
  photo_url: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2013/09/chompers151.jpg',
  title: 'Lovely Corgi',
  owner_id: 1
)
