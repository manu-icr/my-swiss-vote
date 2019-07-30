import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// canvas 2D support for IE
import 'path2d-polyfill';

import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
