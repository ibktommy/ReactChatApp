import React, { useState } from "react";
import "./Chat.css";
import formatText from "../../utilities/utils";
import { useGlobalAppContext } from "../../context/context";
import MessageText from "../../components/MessageText";

const Chat = () => {
	const { currentPeople } = useGlobalAppContext();

	console.log(currentPeople);

	let currentUserData = JSON.parse(localStorage.getItem("users"));

	const { user } = currentUserData;

	const [message, setMessage] = useState([]);

	// Function To Get User Message
	const getMessage = (e) => {
		e.preventDefault();

		if (message === "") {
			alert("PLEASE ENTER YOUR MESSAGE!");
		}
	};

	return (
		<main id="chat">
			<div className="title">Chat Room</div>

			<div className="chat-body">
				<p className="welcome">Atomdev, Welcome to the chat room</p>
				{user && <MessageText />}
			</div>

			<form className="chat-actions" onSubmit={getMessage}>
				<input
					type="text"
					placeholder="Type a message..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit">Send</button>
			</form>
		</main>
	);
};

export default Chat;
