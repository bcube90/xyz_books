class Author < ApplicationRecord
  has_many :book_references, dependent: :destroy
  has_many :books, through: :book_references

  validates :first_name, :last_name, presence: true

  def full_name
    [first_name, middle_name, last_name].compact.join(" ")
  end
end
