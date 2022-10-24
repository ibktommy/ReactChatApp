import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../context/context";
import "./Home.css";

const Home = () => {
	const [user, setUser] = useState("");
	const { currentUser, setCurrentUser, currentUserID, setCurrentUserID } =
		useGlobalAppContext();

	const navigate = useNavigate();

	// Function to login User to the ChatRoom
	const loginUser = (e) => {
		e.preventDefault();

		if (user === "") {
			alert("PLEASE ENTER YOUR USERNAME");
			return;
		}

		const usersData = localStorage.getItem("users");

		const userData = JSON.parse(usersData);

		let newUser = {
			id: new Date().getTime().toString(),
			user: user.toLowerCase(),
		};

		if (!userData) {
			setCurrentUser(user);
			setCurrentUserID(newUser.id);
			localStorage.setItem("users", JSON.stringify([newUser]));
			navigate("/chat");
			return;
		}

		if (userData) {
			let newUserData = JSON.parse(usersData);
			localStorage.setItem("users", JSON.stringify([...newUserData, newUser]));
			setCurrentUser(user);
			setCurrentUserID(newUser.id);
			navigate("/chat");
		}
	};

	return (
		<main id="home">
			<h1 className="header">Welcome to React Chat WebApp</h1>

			<form className="home-form" onSubmit={loginUser}>
				<input
					type="text"
					placeholder="Enter Your Username"
					value={user.toLowerCase()}
					onChange={(e) => setUser(e.target.value)}
				/>
				<button type="submit">Join Chat</button>
			</form>
		</main>
	);
};

export default Home;
