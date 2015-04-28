class AnswersController < ApplicationController
	skip_before_action :verify_authenticity_token
  def index
  end

  def create
  	@answer = Answer.new
  	@answer.text = params[:text]
  	@answer.flashcard_id = params[:flashcard_id]
  	begin
  		@answer.save
  		render :json => { :status => "success" }
  	rescue => e
  		render :json => { :status => "failure" }
  	end
  end
end
