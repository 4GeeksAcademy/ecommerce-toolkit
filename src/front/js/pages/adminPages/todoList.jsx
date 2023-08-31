import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const TodoList = () => {
    const [endedTodos, setEndedTodos] = useState([]);
    const [notEndedTodos, setNotEndedTodos] = useState([]);
    console.log("endedTodos", endedTodos);
    console.log("notEndedTodos", notEndedTodos);

    useEffect(() => {
        getTodos();
    }, []);

    function getTodos() {
        const url = process.env.BACKEND_URL + "api/todos";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setEndedTodos(data.filter((todo) => todo.done == true));
                setNotEndedTodos(data.filter((todo) => todo.done != true));
            });
    }


    function renderEndedTodos() {
        return endedTodos.map((todo) => {
            return (
                <li key={todo.id} className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <p>{todo.id}</p>
                        </div>
                        <div className="col">
                            <p>{todo.category}</p>
                        </div>
                        <div className="col">
                            <p>{todo.task}</p>
                        </div>
                        <div className="col">
                            <p>{todo.costumer_id}</p>
                        </div>
                        <div className="col">
                            <p>{todo.item_id}</p>
                        </div>
                        {/*Button to mark as done*/}
                        <div className="col">
                            <button className="btn btn-success">Done</button>
                        </div>
                    </div>
                </li>
            );
        });
    }

    function renderNotEndedTodos() {
        return notEndedTodos.map((todo) => {
            return (
                <li key={todo.id} className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <p>{todo.id}</p>
                        </div>
                        <div className="col">
                            <p>{todo.category}</p>
                        </div>
                        <div className="col">
                            <p>{todo.task}</p>
                        </div>
                        <div className="col">
                            <p>{todo.costumer_id}</p>
                        </div>
                        <div className="col">
                            <p>{todo.item_id}</p>
                        </div>
                        {/*Button to mark as done*/}
                        <div className="col">
                            <button className="btn btn-success">Done</button>
                        </div>
                    </div>
                </li>
            );
        });
    }


    return (
        // Create a button to send to item wizard
        <div className="container">
            <h2 className="mt-3">Todo list</h2>
            <Link to="/admin/todoWizard">
                <button className="btn btn-primary">Create todo</button>
            </Link>
            <div className="row">
                <div className="col">
                    <h3>Not ended todos</h3>
                    <ul className="list-group">{renderNotEndedTodos()}</ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Ended todos</h3>
                    <ul className="list-group">{renderEndedTodos()}</ul>
                </div>
            </div>
        </div>
    );
};