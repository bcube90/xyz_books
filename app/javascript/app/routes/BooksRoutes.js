import React from "react";
import {Route, Routes, Navigate, Outlet} from 'react-router-dom'
import ShowBook from "../pages/books/ShowBook";

const BooksRoutes = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path=":id" element={<ShowBook />} />
      </Route>

      <Route path='*' element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default BooksRoutes;