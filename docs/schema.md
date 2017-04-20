# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## profiles
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
user_id             | integer   | not null, foreign key (references users), unique
cover_photo_html    | string    |
profile_pic_html    | string    |
description         | text      |
name                | string    |

## pets
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
profile_id    | integer   | not null, foreign key (references profiles)
name          | string    | not null
description   | text      |

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
photo_html  | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos)
pet_id      | integer   | foreign key (references pets)
name        | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
photo_id    | integer   | not null, foreign key (references photos)
body        | text      | not null
