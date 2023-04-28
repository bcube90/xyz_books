export default class ISBNUtil {
  constructor() {}

  

  containsExactly9 (isbn) {
    isbn.match(/^[0-9]{9}$/g)
  }
}