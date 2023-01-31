import { useState, useEffect, createContext } from 'react';
import API from '../utils/API';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState(null);

  useEffect(() => {
    API.getUser()
      .then(({ user }) => {
        setUser(user);
        if (user) {
          API.getIssues().then(({ issues }) => {
            setIssues(issues);
          });
        }
        setLoading(false);
      })
      .catch(() => {});
  }, []);

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
