import React, {lazy} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import { App } from '../App';
import SuspensedView from '../utils/SuspensedView';

const AppRoutes = () => {
  const Home = lazy(() => import('../pages/home'))
  const BooksRoutes = lazy(() => import('./BooksRoutes'))

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route index element={
            <SuspensedView><Home /></SuspensedView>
          } />

          <Route path="books/*" element={
            <SuspensedView><BooksRoutes /></SuspensedView>} /> 
        </Route>

        <Route path='*' element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export {AppRoutes}
