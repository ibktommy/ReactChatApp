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

// {
// 	userMessages &&
// 		userMessages.map((messageItem, index) => {
// 			let { id } = messageItem;
// 			return (
// 				<div className="box" key={index}>
// 					{id === currentUserID
// 						? userMessages
// 								.filter((item) => item.id === currentUserID)
// 								.map((item) => {
// 									let { user, message, index } = item;
// 									return (
// 										<div className="sent" key={index}>
// 											<span className="main-msg">{message}</span>
// 											<span className="username">{user}</span>
// 										</div>
// 									);
// 								})
// 						: userMessages
// 								.filter((item) => item.id !== currentUserID)
// 								.map((item) => {
// 									let { user, message, index } = item;
// 									return (
// 										<div className="receive" key={index}>
// 											<span className="other-msg">{message}</span>
// 											<span className="username">{user}</span>
// 										</div>
// 									);
// 								})}
// 				</div>
// 			);
// 		});
// }

// let { user, message, index } = item;
// return (
// 	<div className="sent" key={index}>
// 		<span className="main-msg">{message}</span>
// 		<span className="username">{user}</span>
// 	</div>
// );

{
	/* <div className="message-text">
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
		</div> */
}

