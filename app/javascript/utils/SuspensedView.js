
import React, {Suspense} from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

export default SuspensedView = ({children}) => {
  TopBarProgress.config({
    barColors: {
      '0': "#5fd2fa",
    },
    barThickness: 2,
    shadowBlur: 6,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}