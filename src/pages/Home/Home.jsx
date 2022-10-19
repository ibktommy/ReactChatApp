import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<main id="home">
			<h1 className="header">Welcome to React Chat WebApp</h1>

			<form className="home-form">
				<input
					type="text"
					placeholder="Enter Your Username"
				/>
				<button type="submit">Join Chat</button>
			</form>
		</main>
	);
};

export default Home;
