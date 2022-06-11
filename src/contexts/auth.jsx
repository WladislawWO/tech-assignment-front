import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(Boolean(localStorage.getItem('token')));
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState(null);

  const logout = () => {
    setIsAuthorized(false);
    setUserName(null);
    localStorage.removeItem('token');
  };

  const value = useMemo(() => ({
    isAuthorized,
    isLoading,
    userName,
    setUserName,
    setIsLoading,
    setIsAuthorized,
    logout,
  }), [isAuthorized, isLoading, setIsAuthorized, setIsLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
