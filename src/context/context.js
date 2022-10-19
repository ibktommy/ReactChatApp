import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
	const [currentPeople, setCurrentPeople] = useState([]);
	const [messages, setMessages] = useState([]);

	return (
		<AppContext.Provider
			value={{ currentPeople, setCurrentPeople, messages, setMessages }}
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
