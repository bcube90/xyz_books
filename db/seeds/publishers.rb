module Seeds
  class Publishers
    def self.generate
      return if Publisher.count > 0
      return unless Rails.env == "development"

      Publisher.create [
        {name: "Paste Magazine"},
        {name: "Publishers Weekly"}, 
        {name: "Graywolf Press"}, 
        {name: "McSweeney's"}
      ]
    end
  end
end