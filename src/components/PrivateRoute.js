import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalAppContext } from "../context/context";

const PrivateRoute = ({ children }) => {
	const { username } = useGlobalAppContext();

	useEffect(() => {
		
	}, [])

	if (!username) {
		return <Navigate to="/" />;
	} else {
		return children;
	}
};

export default PrivateRoute;
