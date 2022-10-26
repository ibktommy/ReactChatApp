import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState("");
	const [currentUserID, setCurrentUserID] = useState("");

	return (
		<AppContext.Provider
			value={{
				currentUser,
				setCurrentUser,
				currentUserID,
				setCurrentUserID,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// Custom Context Hook
export const useGlobalAppContext = () => {
	return useContext(AppContext);
};

// Exporting AppContext and AppContextProvider
export { AppContext, AppContextProvider };
