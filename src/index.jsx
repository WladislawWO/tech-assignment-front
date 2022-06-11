import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import AuthProvider from './contexts/auth';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes />
        <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
