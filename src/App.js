import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Chat from "./pages/Chat/Chat.jsx";
import Error from "./pages/Error/Error.jsx";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/chat" element={<Chat />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
