import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const UserTodo = () => {
    const params = useParams();
    const [userName, setUserName] = useState("");
    const userId = params.userId.substring(1);
    const [task, setTask] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getUserInfo();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const body = {
            category: "Costumer",
            task: task,
            done: false,
            itemId: null,
            costumerId: userId
        };
        const url = process.env.BACKEND_URL + "api/newtodo";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                alert("Todo created");
                navigate("/admin/costumers");
            }
            )
    }

    function getUserInfo() {
        const url = process.env.BACKEND_URL + "api/costumer/" + userId;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setUserName(data.name);
            }
            )
    }

    return (
        <div className="container">
            <h4 className="mt-3">Create todo linked to {userId} - {userName}</h4>
            <form onSubmit={handleSubmit} className="m-2">
                <div className="mb-3">
                    <label className="form-label"> Task: </label>
                    <input type="text" className="form-control" value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
};