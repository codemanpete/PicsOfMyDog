json.extract! photo, :id, :owner_id, :title, :photo_url, :owner_name
json.age time_ago_in_words(photo.created_at)
json.taggings photo.pets do |pet|
  json.pet_id pet.id
  json.pet_name pet.pet_name
end
