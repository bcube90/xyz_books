import { BehaviorSubject } from "rxjs"
import { debounce } from "debounce";

const DefaultSearchState = {
  valid: 0,
  message: "",
  isbn: null
}

class HeaderSearchFormBloc {
  constructor() {
    this.subject = new BehaviorSubject(DefaultSearchState);
    this.searchISBN = debounce(this.searchISBN, 1000);
  }

  searchISBN({target}) {
    if(!target.value) {
      this.subject.next({valid: 0, message: "", isbn: ""});
      return
    }

    const unmaskedIsbn = target.value.replace(/[^0-9X]/g, "");
    const isbnElements = unmaskedIsbn.split('');
    if(this.isValidISBN(isbnElements)) {
      this.subject.next({valid: 2, message: "", isbn: target.value});
    } else {
      this.subject.next({valid: 1, message: "Invalid ISBN format."});
    }
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

const headerSearchBloc = new HeaderSearchFormBloc();

export default headerSearchBloc;