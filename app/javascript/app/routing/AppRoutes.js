import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import { App } from '../App';
import HomePage from '../components/pages/home/HomePage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} >
          <Route index element={<HomePage />} />
        </Route>

        <Route path='*' element={<Navigate to="/error/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export {AppRoutes}
