RSpec.describe User, type: :model do

  describe "password encryption" do
    it "does not save passwords to the database" do
      User.create!(username: "rickandmorty", password: "season3")
      user = User.find_by_username("rickandmorty")
      expect(user.password).not_to be("season3")
    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: "rickandmorty", password: "season3")
    end

    it "can update and match new passwords" do
      User.create!(username: "rickandmorty", password: "season3")
      user = User.find_by_username("rickandmorty")
      user.password = "season3isnevercoming"
      user.save!
      expect(User.find_by_credentials(
        "rickandmorty", "season3isnevercoming"
      )).not_to be_nil
    end

    it "ensures session token is present on create" do
      User.create!(username: "rickandmorty", password: "season3")
      user = User.find_by_username("rickandmorty")
      expect(user.session_token).not_to be_nil
    end

    it "generates a random session token" do
      user = User.new(username: "rickandmorty", password: "season3")
      temp_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).not_to be(temp_token)
    end
  end

  it { should validate_presence_of(:username) }
  describe "uniqueness" do
    subject { User.new(username: "rickandmorty", password: "season3ishere") }
    it { should validate_uniqueness_of(:username) }
  end
  it { should have_many(:photos) }
  it { should have_many(:pets) }
  it { should have_many(:comments) }

end
