import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import axios from 'axios';

interface AuthContextType {
  token: string | null;
  login: (credentials: { email: string; password: string }) => Promise<string>;
  register: (userData: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await axios.post('http://romapulseiras.com.br/api/auth/login', credentials);
      const token = response.data.token;
      if (token) {
        setToken(token);
        localStorage.setItem('token', token);
        return token; // Return the token
      } else {
        throw new Error('Token not found in response');
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  };

  const register = async (userData: { name: string; email: string; password: string }) => {
    try {
      const response = await axios.post('http://romapulseiras.com.br/api/usuarios', userData);
      console.log('API Response:', response.data); // Log the entire response

      // If the response does not contain a token, handle it appropriately
      if (!response.data.token) {
        // Perform login to get the token
        const loginResponse = await login({ email: userData.email, password: userData.password });
        return loginResponse;
      }

      const token = response.data.token;
      setToken(token);
      localStorage.setItem('token', token);
      return token; // Return the token
    } catch (error) {
      console.error('User registration failed:', error);
      throw new Error('User registration failed');
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const isAuthenticated = () => {
    return !!token;
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier usage of the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Export the AuthContext for use in other components
export { AuthContext };
