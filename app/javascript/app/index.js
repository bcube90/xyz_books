import {createRoot} from 'react-dom/client';
import { AppRoutes } from './routes/AppRoutes';
import React from 'react';
import axios from 'axios';

import { setupAxiosRequest, setupAxiosResponse } from './api/setup';

setupAxiosRequest(axios)
setupAxiosResponse(axios)


const container = document.getElementById('root');

createRoot(container).render(<AppRoutes />);

