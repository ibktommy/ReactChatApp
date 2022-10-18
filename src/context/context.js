import React, { useContext, useState } from "react";

// Function to get ChatData from localStorage
// const getLocalStorage = () => {
// 	let chatStorage = localStorage.getItem("chatData");
// 	if (chatStorage) {
// 		return JSON.parse(localStorage.getItem("chatData"));
// 	} else {
// 		return [];
// 	}
// };

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
	const [username, setUsername] = useState("");
	const [messageData, setMessageData] = useState([]);



	return (
		<AppContext.Provider
			value={{
				username,
				setUsername,
				messageData,
				setMessageData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};;

// Custom Context Hook
export const useGlobalAppContext = () => {
	return useContext(AppContext);
};

// Exporting AppContext and AppContextProvider
export { AppContext, AppContextProvider };
