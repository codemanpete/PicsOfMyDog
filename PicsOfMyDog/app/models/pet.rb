class Pet < ActiveRecord::Base
  validates :pet_name, :user_id, presence: true

  belongs_to :user, :class_name => "User", :foreign_key => "user_id"
  has_many :photos, through: :taggings, source: :photo
end
