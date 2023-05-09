import { BehaviorSubject } from "rxjs"
import ISBNUtil from "../lib/ISBNUtil";

const DefaultSearchState = {
  valid: 0,
  message: "",
  isbn: null
}

class HeaderSearchFormBloc extends ISBNUtil {
  constructor() {
    super();
    this.subject = new BehaviorSubject(DefaultSearchState);
  }

  searchISBN(searchValue) {
    if(!searchValue) {
      this.subject.next({valid: 0, message: "", isbn: ""});
      return
    }

    const unmaskedIsbn = searchValue.replace(/[^0-9X]/g, "");
    const isbnElements = unmaskedIsbn.split('');
    
    if(this.isValidISBN(isbnElements)) {
      this.subject.next({valid: 2, message: "", isbn: searchValue});
    } else {
      this.subject.next({valid: 1, message: "Invalid ISBN format."});
    }
  }
}

const headerSearchBloc = new HeaderSearchFormBloc();

export default headerSearchBloc;