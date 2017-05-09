class Api::CommentsController < ApplicationController

  def create
    comment = Comment.new(comment_params)
    if comment.save!
      @photo = Photo.find(comment.photo_id)
      render "/api/photos/show"
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :commenter_id, :photo_id)
  end

end
