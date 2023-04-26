class Publisher < ApplicationRecord
  has_many :book_references, dependent: :destroy
  has_many :books, through: :book_references

  validates :name, presence: true
end
