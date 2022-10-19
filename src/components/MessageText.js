import React from "react";
import "./MessageText.css";
import { formatText } from "../utilities/utils";

const MessageText = () => {
	return (
		<div>
			<article className="message">
				<p className="user-message">Hello there</p>
				<p className="user-name">{formatText("Atom").slice(0, 6)}</p>
			</article>
		</div>
	);
};

export default MessageText;
