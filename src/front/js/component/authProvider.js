import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AuthProvider = ({ children }) => {
    const { store, actions } = useContext(Context);
    const user = store.user;
    if (user == null) {
        console.log("User is null");
        return <Navigate to={"/signin"} />
    }
    return children;
};