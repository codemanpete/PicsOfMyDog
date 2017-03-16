class Photo < ActiveRecord::Base
  validates :photo_url, :title, :owner_id, presence: true
end
