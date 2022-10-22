import React, { useState } from "react";
import "./Chat.css";
import { formatText } from "../../utilities/utils";
import { useGlobalAppContext } from "../../context/context";
import MessageText from "../../components/MessageText";

const Chat = () => {
	const { messages, setMessages } = useGlobalAppContext();

	let currentUserData = JSON.parse(localStorage.getItem("users"));

	const { user, id } = currentUserData[0];

	const [message, setMessage] = useState([]);

	// Function To Get User Message
	const getMessage = (e) => {
		e.preventDefault();

		if (message === "") {
			alert("PLEASE ENTER YOUR MESSAGE!");
		} else {
			const newMessage = {
				id: new Date().getTime().toString(),
				user,
				message,
			};

			setMessages([...messages, newMessage]);
			localStorage.setItem(
				"messages",
				JSON.stringify([...messages, newMessage]),
			);
			setMessage("");
		}
	};

	return (
		<main id="chat">
			<div className="title">Chat Room</div>

			<div className="chat-body">
				<p className="welcome">{formatText(user)}, Welcome to the chat room</p>
				{user && messages && <MessageText />}
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
