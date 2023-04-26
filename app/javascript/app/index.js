import {createRoot} from 'react-dom/client';
import { AppRoutes } from '../utils/AppRoutes';
import React from 'react';
import axios from 'axios';

import { setupAxios } from './api/setup';

setupAxios(axios)

const container = document.getElementById('root');

createRoot(container).render(<AppRoutes />
);
