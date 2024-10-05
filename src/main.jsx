import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { PrivyProvider } from "@privy-io/react-auth";
import "./index.css";
import { StateContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <PrivyProvider
    appId="cm1s5fze803ary1w5tsqukvfd"
    config={{
      appearance: {
        theme: 'dark',
      }
    }}
  >
    <Router>
      <StateContextProvider>
    <App />
      </StateContextProvider>
    </Router>
  </PrivyProvider>

)