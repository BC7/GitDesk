import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider from './utils/context';
import Layout from './components/Layout';
import Home from './pages/home';
import Details from './pages/details';
import Create from './pages/create';
import Login from './pages/login';
import NotFound from './pages/404';
import Logout from './pages/logout';
import './App.css';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="details" element={<Details />} />
            <Route path="new" element={<Create />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
