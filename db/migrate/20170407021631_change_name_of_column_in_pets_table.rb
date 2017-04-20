class ChangeNameOfColumnInPetsTable < ActiveRecord::Migration
  def change
    remove_column :pets, :name
    add_column :pets, :pet_name, :string, null: false, default: "Joey"
  end
end
