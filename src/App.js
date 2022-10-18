import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Chat from "./pages/Chat/Chat.jsx";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/chat" element={<Chat />} />
			</Routes>
		</div>
	);
}

export default App;
