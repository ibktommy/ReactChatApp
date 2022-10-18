import React from "react";
import { useGlobalAppContext } from "../../context/context";
import "./Chat.css";

const Chat = () => {
	const { username, message, setMessage } = useGlobalAppContext();

	// Captalize first letter of every word in username
	let name = username[0].toUpperCase() + username.substring(1);

	// Function to Handle Send-Message
	const sendMessageHandler = () => {
		if (message === "") {
			alert("YOU CANT SEND AND EMPTY MESSAGE");
		} else {
			console.log(message);
		}
		setMessage("");
	};

	return (
		<main id="chat">
			<div className="title">Chat Room</div>
			<div className="chat-body">
				<p className="welcome">{name}, Welcome to the chat room</p>
				<article className="message">
					<p className="user-message">Hello, hope you doing good?</p>
					<p className="user-name">{name.slice(0, 6)}</p>
				</article>
			</div>
			<div className="chat-actions">
				<input
					type="text"
					placeholder="Type a message..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit" onClick={sendMessageHandler}>
					Send
				</button>
			</div>
		</main>
	);
};

export default Chat;
