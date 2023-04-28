import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";

import headerSearchBloc from "../../../utils/blocs/HeaderSearchFormBloc";
import { debounce } from "debounce";


const HeaderSearchForm = () => {
  const [searchState, setSearchState] = useState(headerSearchBloc.subject.getValue())
  const navigate = useNavigate()
  const formRef = useRef(null)

  useEffect(() => {
    const blocListner = (nextState) => {
      setSearchState(nextState)
      if(nextState.valid === 2) 
        navigate(`/books/${nextState.isbn}`, {replace: true})
    }
    
    headerSearchBloc.subject.subscribe(blocListner)
  }, [])

  const sumbitSearch = (event) => {
    event.preventDefault();
    headerSearchBloc.searchISBN(formRef.current[0]["value"])
  }
  
  return (
    <Form ref={formRef} as="form" className="position-relative" onSubmit={sumbitSearch}>
      <Form.Group controlId="search-input">
        <ReactSVG className="seach-icon" src="/media/svg/Icon-feather-search.svg" />
        <Form.Control className="rounded-pill"
          bsPrefix={`border-primary form-control ${searchState.valid === 1  ? 'border-danger text-danger shadow' : ''}`}
          variant="primary" 
          type="text" 
          placeholder="Search"
          name="id"
          onChange={debounce(sumbitSearch, 350)} />
      </Form.Group>
    </Form>
  );
}

export { HeaderSearchForm }