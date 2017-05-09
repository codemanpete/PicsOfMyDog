class Comment < ActiveRecord::Base
  validates :body, :commenter_id, :photo_id, presence: true
  belongs_to :photo
  belongs_to :commenter, :class_name => "User", :foreign_key => "commenter_id"
end
