import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './Auth.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button id='login-button' onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};

export default LogoutButton;