import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { debounce } from "debounce";
import { Image } from "react-bootstrap";

import { getBook } from "../../api/services/Book";

defaultBookState = {
  book: {
    title: null,
    isbn_13: null,
    list_price: null,
    publication_year: null,
    edition: null,
    authors: null,
    publisher: null
  },
  fetchClass: "w-100 placeholder"
}

export default ShowBook = () => {
  const {id} = useParams();

  const [bookState, setBookState] = useState(defaultBookState)

  useEffect(() => {
    const fetchBook = async () => {
      const {data, status} = await getBook(id)
      console.log(status, data)
      if(status === 200) 
        setBookState({...bookState, ...data, fetchClass: null})
    }

    setTimeout(fetchBook, 1000)
  }, [])

  return (
    <div className="book-info">
      <div className="container-lg">
        <div className="row mt-3 placeholder-glow">
          <div className="col-12 pt-5 pb-4">
            <h1 className="fw-bold fs-1 mt-3 px-3 p-md-0">Search Result</h1>
          </div>
          <div className="col-12 col-md-5 col-lg-4 pt-5">
            <Image src="/media/images/no-image.jpg" className={`w-100 p-0 ${bookState.fetchClass}`} />
          </div>
          <div className="col-12 col-md-7 col-lg-8 px-4 px-md-3 px-lg-5 pt-5">
            <div className="ms-lg-2">
              <h2 className={`fw-bold fs-2 mb-5 ${bookState.fetchClass}`} style={{minHeight: 38}}>{bookState.book.title}</h2>
              <p className={`fs-4 fw-bold mb-5 ${bookState.fetchClass}`} style={{minHeight: 36}}>
                by {bookState.book.authors}
              </p>
              <p className={`fs-3 fw-bold mb-1 ${bookState.fetchClass}`} style={{minHeight: 42}}>
                Edition:
                 <span className="text-primary"> 
                  {bookState.book.edition} 
                </span>
              </p>
              <p className={`fs-3 fw-bold mb-1 ${bookState.fetchClass}`} style={{minHeight: 42}}>
                Price: 
                <span className="text-primary"> 
                  {bookState.book.list_price}
                </span>
              </p>
              <p className={`fs-3 fw-bold mb-1 ${bookState.fetchClass}`} style={{minHeight: 42}}>
                ISBN: 
                <span className="text-primary"> 
                  {bookState.book.isbn_13} 
                </span>
              </p>
              <p className={`fs-3 fw-bold mb-1 ${bookState.fetchClass}`} style={{minHeight: 42}}>
                Publication Year: 
                <span className="text-primary"> 
                  {bookState.book.publication_year} 
                </span>
              </p>
              <p className={`fs-3 fw-bold mb-1 ${bookState.fetchClass}`} style={{minHeight: 42}}>
                Publisher: 
                <span className="text-primary"> 
                  {bookState.book.publisher}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}