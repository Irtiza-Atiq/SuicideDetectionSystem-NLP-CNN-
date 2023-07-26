import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Login failed.', error);
    }
  };

  const register = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Registration failed.', error);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log('Logout failed.', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
