import React from "react";
import "./MessageText.css";
import { formatText } from "../utilities/utils";
import { useGlobalAppContext } from "../context/context";

const MessageText = () => {
	const { currentUserID, currentUser } = useGlobalAppContext();

	const userMessages = JSON.parse(localStorage.getItem("usersMessages"));

	return (
		<>
			{userMessages &&
				userMessages.map((messageItem) => {
					let { id, user, message } = messageItem;

					if (id === currentUserID) {
						return (
							<div className="box">
								<div className="sent">
									<span className="main-msg">{message}</span>
									<span className="username">
										{formatText(user).slice(0, 6)}
									</span>
								</div>
								<div className="receive"></div>
							</div>
						);
					} else {
						return (
							<div className="box">
								<div className="sent"></div>
								<div className="receive">
									<span className="other-msg">{message}</span>
									<span className="username">
										{formatText(user).slice(0, 6)}
									</span>
								</div>
							</div>
						);
					}
				})}
		</>
	);
};

export default MessageText;

