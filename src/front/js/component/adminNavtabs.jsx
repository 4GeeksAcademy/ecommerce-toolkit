import React from "react";
import { Link } from "react-router-dom";

export const AdminNavtabs = () => {
    return (
        <ul className="nav nav-tabs bg-light ms-2">
            <li className="nav-item">
                <Link to="/admin/item" className="nav-link" aria-current="page">
                    Items
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/costumers" className="nav-link">
                    Costumers
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/sales" className="nav-link">
                    Sales
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/todo" className="nav-link">
                    Todo
                </Link>
            </li>
        </ul>
    );
};
