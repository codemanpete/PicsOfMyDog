require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  let(:user) { User.create!(username: "rickandmorty", password: "season3") }
  describe "POST #create" do
    context "with valid params" do
      it "renders user on success" do
        post :create, format: :json, user: { username: "harrypotter", password: "isthebest" }
        # post '/api/users', {format: :json}, user: { username: "harrypotter", password: "isthebest" }
        expect(response).to render_template("api/users/show")
      end
    end
  end

  describe "GET #show" do
    it "renders show template" do
      get :show, id: user.id
      expect(response).to render_template("api/users")
    end
  end
end
