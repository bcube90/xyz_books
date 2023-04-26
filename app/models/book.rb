class Book < ApplicationRecord
  include Supports::BookSupport

  has_many :book_references, dependent: :destroy
  has_one :book_reference, dependent: :destroy

  has_many :authors, through: :book_references, source: :referenceable, source_type: "Author"
  has_one :publisher, through: :book_reference, source: :referenceable, source_type: "Publisher"

  validate :has_author_and_publisher?
  validates :title, :isbn_13, :list_price, :publication_year, presence: true

  private

  def has_author_and_publisher?
    referenced = self.book_references.map(&:referenceable_type).uniq
    errors.add(:author, "can't be blank author") unless referenced.include?("Author")
    errors.add(:author, "can't be blank") unless referenced.include?("Publisher")
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
