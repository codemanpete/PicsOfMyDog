json.extract! photo, :id, :owner_id, :title, :photo_url, :owner_name, :height, :width
json.age time_ago_in_words(photo.created_at)
json.taggings photo.pets do |pet|
  json.pet_id pet.id
  json.pet_name pet.pet_name
end
json.owner do
  json.owner_name photo.owner.name
  json.profile_pic_url photo.owner.profile_pic_url
  json.username photo.owner.username
end
json.comments photo.comments do |comment|
  json.body comment.body
  json.age time_ago_in_words(comment.created_at)
  json.owner_name comment.commenter.name
  json.owner_pic comment.commenter.profile_pic_url
  json.owner_id comment.commenter_id
end
