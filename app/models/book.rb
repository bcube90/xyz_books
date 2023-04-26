class Book < ApplicationRecord
  include Supports::BookSupport

  # attr_reader :book_table

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

  def self.find_by_isbn isbn
    isbn = unmask_isbn(isbn)
    isbn = change_to_isbn_13(isbn, masked: false) unless isbn.match(ISBN_13_EXPRESSION)

    book_table = Book.arel_table
    q_unmask_isbn = Arel::Nodes::NamedFunction.new(
      "REPLACE", 
      [book_table[:isbn_13], Arel::Nodes.build_quoted('-'), Arel::Nodes.build_quoted('')],
      "undashed_isbn"
    )

    select(book_table[Arel.star], q_unmask_isbn)
      .where(q_unmask_isbn.alias.eq(isbn))
      .first
  end

  # def book_table
  #   @book_table ||= Book.arel_table
  # end
end
