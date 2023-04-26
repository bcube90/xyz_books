class BookReference < ApplicationRecord
  belongs_to :referenceable, polymorphic: true
  belongs_to :book
end
