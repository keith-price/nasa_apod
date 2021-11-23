import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import App from "./App";

import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
