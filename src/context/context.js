import React, { useContext } from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
	return <AppContext.Provider value={"Hello"}>{children}</AppContext.Provider>;
};

// Custom Context Hook
export const useGlobalAppContext = () => {
	return useContext(AppContext);
};

// Exporting AppContext and AppContextProvider
export { AppContext, AppContextProvider };
