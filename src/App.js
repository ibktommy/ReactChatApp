import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
