class AddHeightWidthToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :height, :integer, null: false
    add_column :photos, :width, :integer, null: false
  end
end
