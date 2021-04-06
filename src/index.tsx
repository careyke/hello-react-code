import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const root = document.querySelector("#root");

(ReactDOM as CommonObject).unstable_createRoot(root).render(<App />);

// ReactDOM.render(<App />, root);
