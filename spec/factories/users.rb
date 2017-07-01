
FactoryGirl.define do
  factory :user do # The name matters. :cat factory returns a Cat object.
    username 'rickandmorty'
    password 'season3'
  end
end
