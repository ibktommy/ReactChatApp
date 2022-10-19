import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../context/context";
import "./Home.css";

const Home = () => {
	const [user, setUser] = useState("");
	const { currentPeople, setCurrentPeople } = useGlobalAppContext();

	const navigate = useNavigate();

	// Function to login User to the ChatRoom
	const loginUser = (e) => {
		e.preventDefault();

		if (user === "") {
			alert("PLEASE ENTER YOUR USERNAME");
		}

		const newUser = {
			id: new Date().getTime().toString(),
			user: user,
		};

		setCurrentPeople([...currentPeople, newUser]);
		localStorage.setItem("users", JSON.stringify(newUser));
		navigate("/chat");
	};

	return (
		<main id="home">
			<h1 className="header">Welcome to React Chat WebApp</h1>

			<form className="home-form" onSubmit={loginUser}>
				<input
					type="text"
					placeholder="Enter Your Username"
					value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
				<button type="submit">Join Chat</button>
			</form>
		</main>
	);
};

export default Home;
