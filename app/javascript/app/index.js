import {createRoot} from 'react-dom/client';
import { AppRoutes } from './routing/AppRoutes';
import React from 'react';

const container = document.getElementById('root');

createRoot(container).render(<AppRoutes />
);
