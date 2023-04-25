module Seeds
  class Authors
    def self.generate
      return if Author.count > 0
      return unless Rails.env == "development"

      Author.create [
        {first_name: "Joel", last_name: "Hartse"},
        {first_name: "Hannah", middle_name: "P.", last_name: "Templer"},
        {first_name: "Marguerite", middle_name: "Z.", last_name: "Duras"},
        {first_name: "Kingsley", last_name: "Amis"},
        {first_name: "Fannie", middle_name: "Peters", last_name: "Flagg"},
        {first_name: "Camille", middle_name: "Byron", last_name: "Paglia"},
        {first_name: "Rainer", middle_name: "Steel", last_name: "Rilke"}
      ]
    end
  end
end