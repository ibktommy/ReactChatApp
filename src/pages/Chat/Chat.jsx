import React, { useEffect, useState } from "react";
import "./Chat.css";
import { formatText } from "../../utilities/utils";
import { useGlobalAppContext } from "../../context/context";
import MessageText from "../../components/MessageText";

const Chat = () => {
	const { currentUser, currentUserID } = useGlobalAppContext();

	const [message, setMessage] = useState("");

	// Function To Get User Message
	const getMessage = (e) => {
		e.preventDefault();

		if (message === "") {
			alert("PLEASE ENTER YOUR MESSAGE!");
			return;
		}

		//Setting Variable to get Data from localStorage
		const usersMessages = localStorage.getItem("usersMessages");
		const usersMessagesData = JSON.parse(usersMessages);

		// Setting Variable to Get User Message
		let newUserMessage = {
			id: currentUserID,
			user: currentUser,
			message: message,
		};

		// Creating Message Data in localStorage if it does not exist therein
		if (!usersMessagesData) {
			localStorage.setItem("usersMessages", JSON.stringify([newUserMessage]));
			setMessage("");
		}

		// Updating Message Data in localStorage if Data initially exists
		if (usersMessagesData) {
			let newMessage = JSON.parse(usersMessages);
			localStorage.setItem(
				"usersMessages",
				JSON.stringify([...newMessage, newUserMessage]),
			);
			setMessage("");
		}
	};;

	return (
		<main id="chat">
			<div className="title">Chat Room</div>

			<div className="chat-body">
				<p className="welcome">
					{formatText(currentUser)}, Welcome to the chat room
				</p>
				{currentUser && <MessageText />}
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
