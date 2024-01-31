import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles, theme } from 'styles';
import { Global, ThemeProvider } from '@emotion/react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <BrowserRouter basename="/rent-a-car">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
