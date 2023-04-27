import axios from "axios";

import { BOOKS_SHOW } from "../endpoint";

export function getBook(id) {
  return axios.get(`${BOOKS_SHOW}/${id}`)
}