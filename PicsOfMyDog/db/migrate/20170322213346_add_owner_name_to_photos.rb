class AddOwnerNameToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :owner_name, :string, null: false, default: "Username"
  end
end
