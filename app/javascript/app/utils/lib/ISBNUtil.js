export default class ISBNUtil {
  constructor() {}

  containsExactly9 (isbn) {
    isbn.match(/^[0-9X]{9}$/g)
  }

  isValidISBN(isbn) {
    return this.validateAs10(isbn) || this.validateAs13(isbn)
  }

  validateAs10 (isbn) {
    let i, s = 0, t = 0;

    for (i = 0; i < 10; ++i) {
      t += isbn[i] == "X" ? 10 : parseInt(isbn[i]);
      s += t;
    }
    return s % 11 === 0;
  }

  validateAs13(isbn) {
    if(isbn.length !== 13) return false;
    
    let multiple = 0, summation = 0;
    
    isbn.forEach((value, index) => {
      if((index + 1) % 2) return;
      multiple += parseInt(value)
    })

    summation = multiple * 3;

    isbn.forEach((value, index) => {
      if(!((index + 1) % 2)) return;
      summation += parseInt(value)
    })

    return summation %  10 == 0
  }
}