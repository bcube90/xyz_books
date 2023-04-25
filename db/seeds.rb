require_relative "./seeds/publishers.rb"
require_relative "./seeds/authors.rb"
require_relative "./seeds/books.rb"

Seeds::Publishers.generate
Seeds::Authors.generate
Seeds::Books.generate