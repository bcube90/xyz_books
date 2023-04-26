class Api::V1::BooksController < ApiController

  def show
    publisher_name = book.publisher.name
    author_names = book.authors.map(&:full_name).join(", ")

    locals = {book: book, publisher_name: publisher_name, author_names: author_names}
    render "api/v1/books/show", locals: locals
  end

  private

  def book
    @book ||= case params.fetch(:id)
    when /^\d+$/ then Book.find(params.fetch(:id))
    else
      Book.find_by_isbn(params.fetch(:id))
    end
  end
end
