import { createContext, useContext } from "react";

const ApiContext = createContext("");

export function ApiProvider({ children }) {
    const API_URL = "https://quartzkraft-api.onrender.com"

    return (
        <ApiContext.Provider value={API_URL}>
            {children}
        </ApiContext.Provider>
    );
}

export function useAPI() {
    return useContext(ApiContext);
}