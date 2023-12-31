import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { CustomThemeProvider } from './utils/ThemeContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </Router>
  </React.StrictMode>
);