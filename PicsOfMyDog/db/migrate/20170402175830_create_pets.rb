class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :pets, :user_id
  end
end
