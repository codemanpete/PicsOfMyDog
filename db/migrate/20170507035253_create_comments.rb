class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false, default: ""
      t.integer :commenter_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end
  end
end
