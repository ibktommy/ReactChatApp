import React from "react";
import "./MessageText.css";
import { formatText } from "../utilities/utils";
import { useGlobalAppContext } from "../context/context";

const MessageText = () => {
	const { currentUserID, currentUser } = useGlobalAppContext();

	const userMessages = JSON.parse(localStorage.getItem("usersMessages"));

	return (
		<div className="message-text">
			<div className="mainUser">
				<div>
					{userMessages &&
						userMessages
							.filter((item) => {
								return item.id === currentUserID;
							})
							.map((item) => {
								let { user, message, index } = item;
								return (
									<div key={index}>
										<article className="userTexts">
											<p className="user-message">{message}</p>
											<p className="user-name">
												{formatText(user).slice(0, 6)}
											</p>
										</article>
									</div>
								);
							})}
				</div>
			</div>

			<div className="otherUser">
				<div>
					{userMessages &&
						userMessages
							.filter((item) => {
								return item.id !== currentUserID;
							})
							.map((item) => {
								let { user, message, index } = item;
								return (
									<div key={index}>
										<article className="otherTexts">
											<p className="other-message">{message}</p>
											<p className="user-name">
												{formatText(user).slice(0, 6)}
											</p>
										</article>
									</div>
								);
							})}
				</div>
			</div>
		</div>
	);
};

export default MessageText;

