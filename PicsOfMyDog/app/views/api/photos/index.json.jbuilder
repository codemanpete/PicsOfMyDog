json.array!(@photos) do |photo|
  json.partial! "api/users/photo", photo: photo
end
