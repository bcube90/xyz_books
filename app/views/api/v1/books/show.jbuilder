
json.book do
  json.(book, :title, :isbn_13, :list_price, :publication_year)
  json.edition book.edition || "N/A"
  json.authors author_names
  json.image book.image.attached? ? url_for(book.image) : "/media/images/no-image.jpg"
  json.publisher publisher_name
end