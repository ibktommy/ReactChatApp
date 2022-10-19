import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { AppContextProvider } from "./context/context";

ReactDOM.render(
	<React.StrictMode>
		<AppContextProvider>
			<Router>
				<App />
			</Router>
		</AppContextProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
