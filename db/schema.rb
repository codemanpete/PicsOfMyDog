# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170503093345) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pets", force: :cascade do |t|
    t.integer  "user_id",                     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "pet_name",   default: "Joey", null: false
  end

  add_index "pets", ["user_id"], name: "index_pets_on_user_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.string   "photo_url",                        null: false
    t.integer  "owner_id",                         null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title",      default: "New Photo", null: false
    t.string   "owner_name", default: "Username",  null: false
  end

  add_index "photos", ["owner_id"], name: "index_photos_on_owner_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "pet_id",     null: false
    t.integer  "photo_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "taggings", ["pet_id"], name: "index_taggings_on_pet_id", using: :btree
  add_index "taggings", ["photo_id"], name: "index_taggings_on_photo_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                 null: false
    t.string   "password_digest",                          null: false
    t.string   "session_token",                            null: false
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
    t.string   "name",            default: "500Pics User", null: false
    t.text     "biography",       default: "",             null: false
    t.string   "profile_pic_url", default: "",             null: false
    t.string   "cover_photo_url", default: "",             null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
