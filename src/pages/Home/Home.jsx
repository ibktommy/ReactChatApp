import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "../../context/context";
import "./Home.css";

const Home = () => {
	const [user, setUser] = useState("");
	const { currentPeople, setCurrentPeople } = useGlobalAppContext();

	const navigate = useNavigate();

	// Function To Get Another User
	// const getOtherUser = (user) => {
	// 	let userData = JSON.parse(localStorage.getItem("users"));

	// 	userData.forEach((oldUser) => {
	// 		let username = oldUser.user;

	// 		if (username === user) {
	// 			alert("USERNAME IS TAKEN, PLEASE INPUT A NEW ONE!");
	// 		}
	// 	});
	// };

	// Function to login User to the ChatRoom
	const loginUser = (e) => {
		e.preventDefault();

		if (user === "") {
			alert("PLEASE ENTER YOUR USERNAME");
			return;
		}

		const usersData = localStorage.getItem("users");

		const userData = JSON.parse(usersData);

		if (!userData) {
			const newUser = {
				id: new Date().getTime().toString(),
				user: user,
			};

			// setCurrentPeople([...currentPeople, newUser]);
			localStorage.setItem("users", JSON.stringify([newUser]));
			navigate("/chat");
		} else {
			userData.forEach((prevUser) => {
				let prevUsername = prevUser.user;

				if (prevUsername === user) {
					alert("USERNAME IS TAKEN, PLEASE INPUT A NEW ONE!");
					setUser("");
					return;
				}
			});
		}
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

// userData.forEach((oldUser) => {
// 	let username = oldUser.user;

// 	if (username || username === user) {
// 		alert("USERNAME IS TAKEN, PLEASE INPUT A NEW ONE!");
// 	}
// 	setUser("");
// 	return;
// });

// else if (prevUsername !== user) {
// 					const newUser = {
// 						id: new Date().getTime().toString(),
// 						user: user,
// 					};
// 					// setCurrentPeople([...currentPeople, newUser]);
// 					let newlyUser = JSON.parse(usersData);
// 					newlyUser.push(newUser);
// 					localStorage.setItem("users", JSON.stringify(newlyUser));
// 				}
// 				return;
