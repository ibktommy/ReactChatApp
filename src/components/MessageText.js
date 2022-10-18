import React from "react";

const MessageText = () => {
  const { username, message } = useGlobalAppContext();
  
	return (
		<article className="message">
			<p className="user-message">Hello, hope you doing good?</p>
			<p className="user-name">{name.slice(0, 6)}</p>
		</article>
	);
};

export default MessageText;
