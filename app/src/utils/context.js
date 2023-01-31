import { useState, createContext } from 'react';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        issues,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext();

export default UserContextProvider;
