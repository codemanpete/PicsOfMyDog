class ChangeWidthHeightNullProperties < ActiveRecord::Migration
  def change
    remove_column :photos, :height
    remove_column :photos, :width
  end
end
