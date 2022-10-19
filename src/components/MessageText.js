import React from "react";
import "./MessageText.css";
import { formatText } from "../utilities/utils";

const MessageText = () => {
	const userMessages = JSON.parse(localStorage.getItem("messages"));

	return (
		<div>
			{userMessages &&
				userMessages.map((messageItem) => {
					let { id, user, message } = messageItem;
					return (
						<div key={id}>
							<article className="message">
								<p className="user-message">{message}</p>
								<p className="user-name">{formatText(user).slice(0, 6)}</p>
							</article>
						</div>
					);
				})}
		</div>
	);
};

export default MessageText;
