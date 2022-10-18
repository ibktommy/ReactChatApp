import React from "react";
import "./Chat.css";

const Chat = () => {
	return (
		<main id="chat">
			<div className="title">Chat Room</div>
			<div className="chat-body">
				<p className="welcome">Atom, Welcome to the chat room</p>
				<article className="message">
					<p className="user-message">Hello there,hpesqvqxk</p>
					<p className="user-name">Atom</p>
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
