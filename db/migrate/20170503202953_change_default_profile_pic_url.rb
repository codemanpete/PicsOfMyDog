class ChangeDefaultProfilePicUrl < ActiveRecord::Migration
  def change
    remove_column :users, :profile_pic_url
    add_column :users, :profile_pic_url, :string, null: false, default: "https://i2.wp.com/pacdn.500px.org/userpic.png?ssl=1"
  end
end
