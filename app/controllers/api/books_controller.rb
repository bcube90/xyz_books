class Api::BooksController < ApiController
  def show
  end

  private

  def book
    book ||= if params.fetch(:id).present?
      Book.find(params.fetch(:id))
    else
      Book.find_by(isbn_13: params.fetch(:isbn))
    end
  end
end
