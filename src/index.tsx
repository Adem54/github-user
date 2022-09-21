import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { Auth0ProviderWithConfig } from "./auth0-provider-with-config";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0ProviderWithConfig>
        <App />
      </Auth0ProviderWithConfig>
    </Provider>
  </React.StrictMode>
);

/*
 <Auth0Provider
     domain={process.env.REACT_APP_AUTH0_DOMAIN}
     clientId={process.env.REACT_APP_AUTH0_CLIENTID} 
     redirectUri={window.location.origin} 
     >
     <App/>
      </Auth0Provider>
*/
