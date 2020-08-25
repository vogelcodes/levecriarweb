import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';
import history from './services/history';

const App: React.FC = () => (
  <Router history={history}>
    <ToastContainer />

    <Routes />
  </Router>
);

export default App;
