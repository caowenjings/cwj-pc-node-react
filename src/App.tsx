import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default React.memo(App);
