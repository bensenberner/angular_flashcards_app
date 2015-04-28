class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :text
      t.integer :flashcard_id
      t.boolean :correct

      t.timestamps null: false
    end
  end
end
