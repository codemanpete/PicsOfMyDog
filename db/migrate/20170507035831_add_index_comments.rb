class AddIndexComments < ActiveRecord::Migration
  def change
    add_index :comments, :commenter_id
    add_index :comments, :photo_id
  end
end
