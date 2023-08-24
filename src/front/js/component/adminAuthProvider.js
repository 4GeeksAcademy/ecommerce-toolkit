import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AdminAuthProvider = ({ children }) => {
    const { store, actions } = useContext(Context);
    const admin = store.admin;
    if (!admin) {
        return <Navigate to={"/signin"} />
    }
    return children;
};