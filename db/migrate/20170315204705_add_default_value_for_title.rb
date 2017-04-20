class AddDefaultValueForTitle < ActiveRecord::Migration
  def change
    remove_column :photos, :title
    add_column :photos, :title, :string, null: false, default: "New Photo"
  end
end
