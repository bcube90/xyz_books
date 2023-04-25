class Book < ApplicationRecord
  has_many :authors_books, dependent: :destroy
  has_many :authors, through: :authors_books
  belongs_to :publisher

  validates_presence_of :publisher
  validate :has_author?

  validates :title, :isbn_13, :list_price, :publication_year, presence: true

  private

  def has_author?
    errors.add(:author, "can't be blank") unless self.authors_books.any?
  end
end
