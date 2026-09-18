import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import MainLayout from './layouts/MainLayout/MainLayout';
import AppRoutes from './routes/AppRoutes';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <MainLayout theme={theme} toggleTheme={toggleTheme}>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
}

export default App;
