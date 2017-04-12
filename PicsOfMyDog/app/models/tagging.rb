class Tagging < ActiveRecord::Base
  validates :pet_id, :photo_id, presence: true

  validates_uniqueness_of :pet_id, :scope => :photo_id

  belongs_to :photo
  belongs_to :pet
end
