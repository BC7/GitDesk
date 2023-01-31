import { Outlet } from 'react-router-dom';
import UserContextProvider from '../utils/context';
import Nav from './Nav';

const Layout = () => {
  return (
    <UserContextProvider>
      <Nav />
      <Outlet />
    </UserContextProvider>
  );
};

export default Layout;
