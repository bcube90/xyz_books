import axios from "axios";

import { BOOKS_SHOW } from "../endpoint";

export async function getBook(id) {
  try {
    return await axios.get(`${BOOKS_SHOW}/${id}`);
  } catch {
    return {data: {message: "Invalid request."}, status: 400}
  }
}