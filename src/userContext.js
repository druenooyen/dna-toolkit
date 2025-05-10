import { createContext, useContext } from "react";

// Create the context
export const UserContext = createContext(null);

// To access the context
export const useUser = () => useContext(UserContext);
