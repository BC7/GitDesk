import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../utils/context';
import API from '../utils/API';

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { user } = context;

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('code');
  const error = urlParams.get('error');

  useEffect(() => {
    if (!user && code) {
      API.sendCode(code)
        .then(() => {
          navigate('/');
        })
        .catch((e) => {
          navigate('/');
        });
    } else if (error || user) {
      navigate('/');
    } else {
      window.location.href = process.env.REACT_APP_AUTH_PROVIDER;
    }
  });

  return <></>;
};

export default Login;
