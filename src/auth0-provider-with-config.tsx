import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

export const Auth0ProviderWithConfig = ({
  children}: PropsType) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = window.location.origin;//http://localhost:3000
  
  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};

interface PropsType {
  children:React.ReactNode;
}