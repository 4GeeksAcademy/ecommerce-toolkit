import React from "react";
import { Link } from "react-router-dom";

export const TodoList = () => {
    return (
        // Create a button to send to item wizard
        <div className="container">
            <h2 className="mt-3">Todo list</h2>
            <Link to="/admin/todoWizard">
                <button className="btn btn-primary">Create todo</button>
            </Link>
        </div>
    );
};