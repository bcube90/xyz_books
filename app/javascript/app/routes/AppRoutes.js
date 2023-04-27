import React, {lazy} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import { App } from '../App';
import SuspensedView from '../utils/SuspensedView';

const AppRoutes = () => {
  const Home = lazy(() => import('../pages/home'))
  const NotFound = lazy(() => import('../pages/NotFound'))
  const BooksRoutes = lazy(() => import('./BooksRoutes'))

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route index element={
            <SuspensedView><Home /></SuspensedView>
          } />

          <Route path="books/*" element={
            <SuspensedView><BooksRoutes /></SuspensedView>
          } /> 

          <Route path="not-found" element={
            <SuspensedView><NotFound /></SuspensedView>
          } />
        </Route>

        <Route path='*' element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export {AppRoutes}
