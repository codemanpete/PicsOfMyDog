RSpec.describe Api::UsersController, type: :controller do
  describe "post #create" do
    context "with valid params" do
      it "renders user on success" do
        post :create, user: { username: "rickandmorty", password: "season3" }
        expect(response).to render_template("api/users/show")
      end
    end
  end
end
