class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.references :author, null: false, foreign_key: true
      t.references :publisher, null: false, foreign_key: true
      t.string :title
      t.string :isbn_13
      t.decimal :list_price
      t.datetime :publication_year
      t.string :edition

      t.timestamps
    end
  end
end
