class Api::TaggingsController < ApplicationController
  def create
    tagging = Tagging.new(tagging_params)
    if tagging.save
      @photo = Photo.find(tagging.photo_id)
      render "/api/photos/show"
    end
  end

  private

  def tagging_params
    params.require(:tagging).permit(:pet_id, :photo_id)
  end
end
