import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../utils/context';
import Nav from './Nav';

const Layout = () => {
  const context = useContext(UserContext);
  const { loading } = context;

  return (
    <>
      <Nav />
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Layout;
