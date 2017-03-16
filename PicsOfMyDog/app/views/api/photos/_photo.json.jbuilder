json.extract! photo, :id, :owner_id, :title, :photo_url
json.age time_ago_in_words(photo.created_at)
