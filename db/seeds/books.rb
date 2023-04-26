module Seeds
  class Books
    def self.generate
      return if Book.count > 0
      return unless Rails.env == "development"

      sample_books = [
        {
          title: "American Elf",
          isbn_13: "978-1-891830-85-3",
          list_price: 1000,
          publication_year: 2004,
          edition: "Book 2",
          publisher: [{name: "Paste Magazine"}],
          authors: [
            {first_name: "Joel", last_name: "Hartse"},
            {first_name: "Hannah", middle_name: "P.", last_name: "Templer"},
            {first_name: "Marguerite", middle_name: "Z.", last_name: "Duras"}
          ]
        }, {
          title: "Cosmoknights",
          isbn_13: "978-1-60309-454-2",
          list_price: 2000,
          publication_year: 2019,
          edition: "Book 1",
          publisher: [{name: "Publishers Weekly"}],
          authors: [
            {first_name: "Kingsley", last_name: "Amis"},
          ]
        }, {
          title: "Essex County",
          isbn_13: "978-1-60309-038-4",
          list_price: 500,
          publication_year: 1990,
          edition: "After School Special",
          publisher: [{name: "Graywolf Press"}],
          authors: [
            {first_name: "Kingsley", last_name: "Amis"},
          ]
        }, {
          title: "Hey, Mister (Vol 1)",
          isbn_13: "978-1-891830-02-0",
          list_price: 1200,
          publication_year: 2000,
          edition: "After School Special",
          publisher: [{name: "Graywolf Press"}],
          authors: [
            {first_name: "Hannah", middle_name: "P.", last_name: "Templer"},
            {first_name: "Fannie", middle_name: "Peters", last_name: "Flagg"},
            {first_name: "Camille", middle_name: "Byron", last_name: "Paglia"},
          ]
        }, {
          title: "The Underwater Welder",
          isbn_13: "978-1-60309-398-9",
          list_price: 3000,
          publication_year: 2022,
          edition: nil,
          publisher: [{name: "McSweeney's"}],
          authors: [
            {first_name: "Rainer", middle_name: "Steel", last_name: "Rilke"}
          ]
        }
      ]

      sample_books.each do |sample_book|
        book = Book.new sample_book.except(:publisher, :authors)
        get_association_for(Author, sample_book[:authors]).each do |assoc|
          book.book_references.build assoc
        end

        publisher_data = get_association_for(Publisher, sample_book[:publisher]).first
        book.book_references.build publisher_data
        book.save!
      end
    end

    def self.get_association_for klass, samples
      samples.inject([]) do |mem, value|
        if association = klass.find_by(value)
          mem << {referenceable_id: association.id, referenceable_type: klass.to_s}
        else
          mem
        end
      end
    end
  end
end