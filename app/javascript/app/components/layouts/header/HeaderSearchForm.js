import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";

import headerSearchBloc from "../../../utils/blocs/HeaderSearchFormBloc";


const HeaderSearchForm = () => {
  const [searchState, setSearchState] = useState(headerSearchBloc.subject.getValue())
  const navigate = useNavigate()

  useEffect(() => {
    const blocListner = (nextState) => {
      setSearchState(nextState)
      if(nextState.valid === 2) 
        navigate(`/books/${nextState.isbn}`, {replace: true})
    }
    
    headerSearchBloc.subject.subscribe(blocListner)
  }, [])
  
  return (
    <Form className="position-relative">
      <Form.Group controlId="search-input">
        <ReactSVG className="seach-icon" src="/media/svg/Icon-feather-search.svg" />
        <Form.Control className="rounded-pill"
          bsPrefix={`border-primary form-control ${searchState.valid === 1  ? 'border-danger text-danger shadow' : ''}`}
          variant="primary" 
          type="text" 
          placeholder="Search" 
          onChange={headerSearchBloc.searchISBN.bind(headerSearchBloc)} />
      </Form.Group>
    </Form>
  );
}

export { HeaderSearchForm }