// src/context/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from 'react';

// Create context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        // Check if there's a token in localStorage
        const token = localStorage.getItem('melodypass_token');
        
        if (token) {
          // In a real app, you would validate the token with your backend
          // For now, we'll just simulate a successful login with mock data
          const userData = {
            id: '123',
            name: 'John Doe',
            email: 'john@example.com',
            role: 'user'
          };
          
          setUser(userData);
        }
      } catch (err) {
        setError(err.message);
        // Clear any invalid tokens
        localStorage.removeItem('melodypass_token');
      } finally {
        setLoading(false);
      }
    };
    
    checkLoggedIn();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      // In a real app, you would make an API call to your backend
      // For now, we'll simulate a successful login with mock data
      
      // Mock login logic (replace with actual API call later)
      if (email === 'demo@example.com' && password === 'password') {
        const userData = {
          id: '123',
          name: 'John Doe',
          email: 'demo@example.com',
          role: 'user'
        };
        
        // Store token in localStorage
        localStorage.setItem('melodypass_token', 'mock_token_12345');
        
        setUser(userData);
        return { success: true };
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    try {
      setLoading(true);
      setError(null);
      
      // In a real app, you would make an API call to your backend
      // For now, we'll simulate a successful signup with mock data
      
      // Mock validation
      if (!name || !email || !password) {
        throw new Error('All fields are required');
      }
      
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      // Mock signup success
      const userData = {
        id: '123',
        name,
        email,
        role: 'user'
      };
      
      // Store token in localStorage
      localStorage.setItem('melodypass_token', 'mock_token_12345');
      
      setUser(userData);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('melodypass_token');
    setUser(null);
  };

  // Check if user is admin
  const isAdmin = () => {
    return user?.role === 'admin';
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        signup,
        logout,
        isAdmin,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;