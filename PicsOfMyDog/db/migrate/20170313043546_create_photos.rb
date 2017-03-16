class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :photo_url, null: false
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end

    add_index :photos, :owner_id
  end
end
