class FlashcardsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
  end

  def create
  	@flashcard = Flashcard.new
  	@flashcard.question = params[:question]
    @flashcard.category = params[:category]
  	begin
  		@flashcard.save
  		render :json => { :status => "success", :flashcard_id => @flashcard.id }
  	rescue => e
  		render :json => { :status => "failure" }
  	end
  end
end
