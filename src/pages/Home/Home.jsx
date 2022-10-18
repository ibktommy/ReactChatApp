import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../context/context";
import "./Home.css";

const Home = () => {
	const { username, setUsername} =
		useGlobalAppContext();

	// Navigate
	const navigate = useNavigate();

	// Function to Submit Username
	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (username === "") {
			alert("Enter Your Username to Proceed to Chat Room!");
		} else {
			navigate(`/chat/${username}`);
		}
	};

	return (
		<main id="home">
			<h1 className="header">Welcome to React Chat WebApp</h1>

			<form className="home-form" onSubmit={formSubmitHandler}>
				<input
					type="text"
					placeholder="Enter Your Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button type="submit">Join Chat</button>
			</form>
		</main>
	);
};

export default Home;
