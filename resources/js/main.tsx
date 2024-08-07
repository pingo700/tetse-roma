// src/main.tsx
import React, { useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './app';
import { Login } from './login';
import { CreateUser } from './register';
import { Admin } from './admin';
import { AuthProvider, AuthContext } from './auth-context';
import './global.css';
import 'unfonts.css';

const container = document.getElementById('root');
const root = createRoot(container!);

const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return authContext.isAuthenticated() ? element : <Navigate to="/login" />;
};

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateUser />} />
          <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
