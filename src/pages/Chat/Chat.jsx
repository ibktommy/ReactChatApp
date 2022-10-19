import React from "react";
import "./Chat.css";
import formatText from "../../utilities/utils";

const Chat = () => {
	return (
		<main id="chat">
			<div className="title">Chat Room</div>

			<div className="chat-body">
				<p className="welcome">Atomdev, Welcome to the chat room</p>
			</div>

			<form className="chat-actions">
				<input type="text" placeholder="Type a message..." />
				<button type="submit">Send</button>
			</form>
		</main>
	);
};

export default Chat;
