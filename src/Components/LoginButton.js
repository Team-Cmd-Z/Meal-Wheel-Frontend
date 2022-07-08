import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from 'react-bootstrap/Button';
import './Auth.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button id='login-button' onClick={() => loginWithRedirect()}>Login</Button>;
};

export default LoginButton;