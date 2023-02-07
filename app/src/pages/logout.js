import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/API';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    API.logout();
    navigate('/');
  });

  return <></>;
};

export default Logout;
