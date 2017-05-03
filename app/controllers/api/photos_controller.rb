class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render "/api/photos/show"
    end
  end

  def show
    @photo = Photo.find(params[:id])
    render "/api/photos/show"
  end

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      @photos = user.photos
    elsif params[:pet_id]
      pet = Pet.find(params[:pet_id])
      @photos = pet.photos
    else
      @photos = Photo.all
    end
    render "/api/photos/index"
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_url, :title, :owner_id, :height, :width)
  end
end
