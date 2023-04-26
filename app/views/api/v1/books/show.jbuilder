
json.book do
  json.(book, :title, :isbn_13, :list_price, :publication_year, :edition)
  json.authors author_names
  json.publisher publisher_name
end