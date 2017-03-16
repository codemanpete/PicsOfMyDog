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
    @photos = Photo.all
    render "/api/photos/index"
  end

  private

  def photo_params
    params.require(:photo).permit(:photo_url, :title, :owner_id)
  end
end
