import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

// NIY - TONO comment: a better approach would be to save the URL in .env to adapt according to the environment (production vs deployingPreviewBranch).

// axios.defaults.baseURL =
//   "https://pfecommerce11b-production-177a.up.railway.app"; /* production */
// axios.defaults.baseURL = "https://viandaexpress-railway-previewbranchexperiment.up.railway.app"; /* deployingPreviewBranch environment */
axios.defaults.baseURL = "http://localhost:3001"; /* local */

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        // redirect_uri: window.location.origin,
        redirect_uri: "http://localhost:5173",
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);
