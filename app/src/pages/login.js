import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../utils/context';
import API from '../utils/API';

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { user } = context;
  useEffect(() => {
    if (!user) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get('code');
      const error = urlParams.get('error');
      if (code) {
        console.log('GH CODE\n', code);
        API.sendCode(code)
          .then(({ data }) => {
            navigate('/');
          })
          .catch(() => {
            window.location.href = process.env.REACT_APP_AUTH_PROVIDER;
          });
      } else if (error) {
        navigate('/');
      }
      // else {
      //   window.location.href = process.env.REACT_APP_AUTH_PROVIDER;
      // }
    } else {
      navigate.push('/');
    }
  });

  return <div></div>;
};

export default Login;
