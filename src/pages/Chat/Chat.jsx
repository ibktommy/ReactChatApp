import React, { useState } from "react";
import "./Chat.css";
import { formatText } from "../../utilities/utils";
import { useGlobalAppContext } from "../../context/context";
import MessageText from "../../components/MessageText";

const Chat = () => {
	const {
		currentUser,
		setCurrentUser,
		currentUserID,
		setCurrentUserID,
		messages,
		setMessages,
	} = useGlobalAppContext();

	const [message, setMessage] = useState([]);

	// Function To Get User Message
	const getMessage = (e) => {
		e.preventDefault();

		if (message === "") {
			alert("PLEASE ENTER YOUR MESSAGE!");
			return;
		}

		const usersMessages = localStorage.getItem("UsersMessages");

		const userMessageData = JSON.parse(usersMessages);

		let newUserMessage = {
			id: currentUserID,
			user: currentUser,
			message: message,
		};

		if (!userMessageData) {
			localStorage.setItem("UsersMessages", JSON.stringify([newUserMessage]));
			setMessage("");
			return;
		}

		if (userMessageData) {
			let newMessage = JSON.parse(usersMessages);
			localStorage.setItem(
				"UsersMessages",
				JSON.stringify([...newMessage, newUserMessage]),
			);
			setMessage("");
		}
	};

	return (
		<main id="chat">
			<div className="title">Chat Room</div>

			<div className="chat-body">
				<p className="welcome">
					{formatText(currentUser)}, Welcome to the chat room
				</p>
				{currentUser && messages && <MessageText />}
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
};;;

export default Chat;
