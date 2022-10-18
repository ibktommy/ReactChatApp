import React from "react";
import { useGlobalAppContext } from "../../context/context";
import "./Chat.css";

const Chat = () => {
	const { username } = useGlobalAppContext();

	let name = username[0].toUpperCase() + username.substring(1);

	return (
		<main id="chat">
			<div className="title">Chat Room</div>
			<div className="chat-body">
				<p className="welcome">{name}, Welcome to the chat room</p>
				<article className="message">
					<p className="user-message">Hello, hope you doing good?</p>
					<p className="user-name">{name.slice(0, 5)}</p>
				</article>
			</div>
			<div className="chat-actions">
				<input type="text" placeholder="Type a message..." />
				<button>Send</button>
			</div>
		</main>
	);
};

export default Chat;
