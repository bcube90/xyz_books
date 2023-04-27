module Supports::BookSupport
  extend ActiveSupport::Concern

  ISBN_13_EXPRESSION  = /^\A(978)-?([0-9]{2})-?([0-9]{4})-?([0-9]{3})-?([0-9]{1})\z$/ix
  ISBN_10_EXPRESSION  = /^\A([0-9])-?([0-9]{3})-?([0-9]{5})-?([0-9X])$\z/ix
  ISBN_9_EXPRESSION   = /^\A[0-9X]{9}\z$/ix
  
  class_methods do
    def change_to_isbn_13(isbn_10, masked: true)
      isbn_10 = unmask_isbn(isbn_10)

      if /^\A([0-9]{9})-?([0-9]?)\z$/ix =~ isbn_10
        digits = $1.split("").map(&:to_i)
        digits.unshift(9,7,8)
        summation = 0

        digits.each_with_index do |digit, index|
          multiplier = index % 2 == 0 ? 1 : 3
          summation += digit * multiplier
        end

        result = 10 - summation % 10
        digits.push(result > 9 ? 0 : result)
        
        return digits.join unless masked
        return digits.join.scan(ISBN_13_EXPRESSION).flatten.join('-')
      end

      return nil
    end

    def change_to_isbn_10(isbn_13, masked: true)
      isbn_13 = unmask_isbn(isbn_13)
      if /^(978).?([0-9]{9}).?([0-9X])$/ =~ isbn_13
        digits = $2.split("").map(&:to_i)
        summation = 0

        for multiplier in (10).downto(2)
          index = 9 - (multiplier - 1)
          summation += digits[index] * multiplier
        end

        check_digit = (11 - ((summation%11)%11))%11
        digits.push(check_digit <= 9 ? check_digit : "X")

        return digits.join unless masked 
        return digits.join.scan(ISBN_10_EXPRESSION).flatten.join('-')
      end
      
      return nil
    end

    def unmask_isbn isbn
      isbn.gsub(/[^0-9X]/, '')
    end

    def validate_isbn isbn
      return isbn if validate_isbn_10(isbn)
      return isbn if validate_isbn_13(isbn)
      # return nil if isbn.match?(/[^0-9X\-]/ix)
      return nil
    end

    def validate_isbn_10 isbn
      s = t = 0
      digits = unmask_isbn(isbn).split("")
      digits.each_with_index do |value, index|
        digit = value == "X" ? 10 : value.to_i
        t += digit
        s += t
      end
      
      return s % 11 == 0
    end

    def validate_isbn_13 isbn
      multiple = summation = 0
      digits = unmask_isbn(isbn).split("")

      digits.each_with_index do |value, index|
        next if (index + 1).odd?
        multiple += value.to_i
      end

      summation = multiple * 3

      digits.each_with_index do |value, index|
        next if (index + 1).even?
        summation += value.to_i
      end

      summation % 10 == 0
    end
  end

  def validate_isbn_13
    multiple = summation = 0
    digits = unmask_isbn(isbn).split("")
    digits.filter.with_index{ |value, index| (index + 1).even? }
  end

  def to_isbn_10
    self.class.change_to_isbn_10(isbn_13)
  end
end