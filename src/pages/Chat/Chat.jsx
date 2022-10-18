import React from "react";
import { useGlobalAppContext } from "../../context/context";
import "./Chat.css";
import { formatText } from "../../utilities/utils";

const Chat = () => {
	const { username, message, setMessage } = useGlobalAppContext();

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
				<p className="welcome">
					{formatText(username)}, Welcome to the chat room
				</p>
				<article className="message">
					<p className="user-message">Hello, hope you doing good?</p>
					<p className="user-name">{formatText(username).slice(0, 6)}</p>
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
