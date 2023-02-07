import { useState, useEffect, createContext } from 'react';
import API from '../utils/API';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState(null);

  const init = async () => {
    console.log('GITDESK - INIT');
    await API.getUser()
      .then((data) => {
        if (data) {
          setUser(data);
          API.getIssues().then(({ issues }) => {
            setIssues(issues);
          });
        }
        setLoading(false);
      })
      .catch(() => {});
  };

  useEffect(() => {
    init();
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
