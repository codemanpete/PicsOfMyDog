class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :pet_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end

    add_index :taggings, :pet_id
    add_index :taggings, :photo_id
  end
end
