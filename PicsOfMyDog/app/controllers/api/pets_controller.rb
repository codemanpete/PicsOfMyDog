class Api::PetsController < ApplicationController
  def create
    @pet = Pet.new(pet_params)
    if @pet.save!
      render "/api/pets/show"
    end
  end

  def index
    user = User.find(params[:user_id])
    @pets = user.pets
    render "/api/pets/index"
  end

  private

  def pet_params
    params.require(:pet).permit(:pet_name, :user_id)
  end
end
