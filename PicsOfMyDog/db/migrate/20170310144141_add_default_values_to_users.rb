class AddDefaultValuesToUsers < ActiveRecord::Migration
  def change
    remove_column :users, :biography
    remove_column :users, :profile_pic_url
    remove_column :users, :cover_photo_url
    add_column :users, :biography, :text, null: false, default: ""
    add_column :users, :profile_pic_url, :string, null: false, default: ""
    add_column :users, :cover_photo_url, :string, null: false, default: ""
  end
end
