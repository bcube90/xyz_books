import React, {lazy} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import { App } from '../app/App';
import SuspensedView from './SuspensedView';

const AppRoutes = () => {
  const HomePage = lazy(() => import('../app/pages/home/HomePage'))

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route index element={
            <SuspensedView><HomePage /></SuspensedView>
          } />
        </Route>

        <Route path='*' element={<Navigate to="/error/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export {AppRoutes}
