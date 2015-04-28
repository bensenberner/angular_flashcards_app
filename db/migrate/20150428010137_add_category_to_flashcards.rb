class AddCategoryToFlashcards < ActiveRecord::Migration
  def change
    add_column :flashcards, :category, :string
  end
end
