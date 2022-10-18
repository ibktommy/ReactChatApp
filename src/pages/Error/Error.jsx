import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
	return (
		<div className="error">
			<h1>PAGE NOT FOUND</h1>
			<Link to="/">
				<button className="error-btn">Back to Home</button>
			</Link>
		</div>
	);
};

export default Error;
