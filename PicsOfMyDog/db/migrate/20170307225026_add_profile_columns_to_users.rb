class AddProfileColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string, null: false, default: "500Pics User"
    add_column :users, :biography, :text
    add_column :users, :profile_pic_url, :string
    add_column :users, :cover_photo_url, :string
  end
end
