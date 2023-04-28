import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";

import headerSearchBloc from "../../utils/blocs/HeaderSearchFormBloc";

const AppToast = () => {
  const [toastState, setToastState] = useState({shown: false, message: ""})

  useEffect(() => {
    const blocListner = (nextState) => {
      if(nextState.valid === 1) {
        setToastState({
          shown: nextState.valid === 1,
          message: nextState.message
        })

        setTimeout(() => {
          setToastState({...toastState, shown: false})
        }, 3000)
      }
    }
    
    headerSearchBloc.subject.subscribe(blocListner)
  }, [])

  return (
    <Toast
      className="d-inline-block m-1 pages-toast"
      bg={"danger"}
      show={toastState.shown}
      position="top-end"
      delay={3000}
      autohide
    >
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto text-danger">XYZ Books</strong>
      </Toast.Header>
      <Toast.Body className="text-white">
        {toastState.message}
      </Toast.Body>
    </Toast>
  );
}

export {AppToast}