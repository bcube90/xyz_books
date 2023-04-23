import React, {Suspense, lazy} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

import { App } from '../App';
// import HomePage from '../components/pages/home/HomePage';

const AppRoutes = () => {
  const HomePage = lazy(() => import('../components/pages/home/HomePage'))

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

const SuspensedView = ({children}) => {
  TopBarProgress.config({
    barColors: {
      '0': "#5fd2fa",
    },
    barThickness: 2,
    shadowBlur: 6,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {AppRoutes}
