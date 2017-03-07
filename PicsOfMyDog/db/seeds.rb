User.create(
  username: 'example',
  password_digest: BCrypt::Password.create("password")
)
