RSpec.describe Photo, type: :model do
  describe "photo methods" do

    it "associates with owner name on initialize" do

      FactoryGirl.build(:user, id: 1).save!
      expect_any_instance_of(Photo).to receive(:record_owner)
      Photo.new(photo_url: "fake_url", owner_id: 1)
    end
  end
end
