import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<App />
			<Footer/>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
