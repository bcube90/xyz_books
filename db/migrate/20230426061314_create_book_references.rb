class CreateBookReferences < ActiveRecord::Migration[7.0]
  def change
    create_table :book_references do |t|
      t.references :referenceable, polymorphic: true, null: false
      t.references :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
