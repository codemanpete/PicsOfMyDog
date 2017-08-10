class Photo < ActiveRecord::Base
  validates :photo_url, :title, :owner_id, presence: true

  belongs_to :owner, :class_name => "User", :foreign_key => "owner_id"
  has_many :taggings, dependent: :destroy
  has_many :pets, :through => :taggings
  has_many :comments, dependent: :destroy

  after_initialize :record_owner

  private

  def record_owner
    self.owner_name = self.owner.username
    self.save!
  end
end
