import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Chat from "./pages/Chat/Chat.jsx";
import PrivateRoute from "./components/PrivateRoute";
import { useGlobalAppContext } from "./context/context.js";

function App() {
	const { username } = useGlobalAppContext();

	return (
		<div className="container">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					path={`/chat/:${username}`}
					element={
						<PrivateRoute>
							<Chat />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
