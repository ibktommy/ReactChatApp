import React from "react";
import { useGlobalAppContext } from "../context/context";
import { formatText } from "../utilities/utils";

const MessageText = () => {
	const { username, messageData } = useGlobalAppContext();

	return (
		<>
			{messageData.length > 0
				? messageData.map((item) => {
						let { id, message } = item;

						return (
							<div key={id}>
								<article className="message">
									<p className="user-message">{message}</p>
									<p className="user-name">
										{formatText(username).slice(0, 6)}
									</p>
								</article>
							</div>
						);
				  })
				: null}
		</>
	);
};

export default MessageText;
