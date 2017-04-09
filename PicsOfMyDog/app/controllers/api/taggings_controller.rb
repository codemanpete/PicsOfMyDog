class Api::TaggingsController < ApplicationController
  def create
    @tagging = Tagging.new(tagging_params)
    @tagging.save
  end

  private

  def tagging_params
    params.require(:tagging).permit(:user_id, :photo_id)
  end
end
