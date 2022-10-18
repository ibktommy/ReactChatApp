import React, { useState } from "react";
import { useGlobalAppContext } from "../../context/context";
import "./Chat.css";
import { formatText } from "../../utilities/utils";
import MessageText from "../../components/MessageText";

const Chat = () => {
	const [message, setMessage] = useState("");
	const { username,  messageData, setMessageData } =
		useGlobalAppContext();

	// Function to Handle Send-Message
	const sendMessageHandler = (e) => {
		if (message === "") {
			alert("YOU CANT SEND AND EMPTY MESSAGE");
		} else {
			const newMessage = {
				id: new Date().getTime().toString(),
				username: username,
				message: message,
			};
			setMessageData([...messageData, newMessage]);
			localStorage.setItem(
				`${username}`,
				JSON.stringify([...messageData, newMessage]),
			);
		}
		setMessage("");
	};

	return (
		<main id="chat">
			<div className="title">Chat Room</div>
			<div className="chat-body">
				<p className="welcome">
					{formatText(username)}, Welcome to the chat room
				</p>
				{messageData && <MessageText />}
			</div>
			<div className="chat-actions">
				<input
					type="text"
					placeholder="Type a message..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit" onClick={(e) => sendMessageHandler()}>
					Send
				</button>
			</div>
		</main>
	);
};

export default Chat;
