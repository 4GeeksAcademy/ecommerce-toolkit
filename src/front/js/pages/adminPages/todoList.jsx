import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const TodoList = () => {
    const [endedTodos, setEndedTodos] = useState([]);
    const [notEndedTodos, setNotEndedTodos] = useState([]);
    let customersNames = {};
    let itemsNames = {};
    const [items, setItems] = useState([]);
    const [customers, setCustomers] = useState([]);
    console.log("endedTodos", endedTodos);
    console.log("notEndedTodos", notEndedTodos);

    useEffect(() => {
        getTodos();
        getItems();
        getCustomers();
    }, []);

    function getTodos() {
        const url = process.env.BACKEND_URL + "api/todos";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                data.sort((a, b) => a.id - b.id);
                setEndedTodos(data.filter((todo) => todo.done == true));
                setNotEndedTodos(data.filter((todo) => todo.done != true));
            });
    }

    function getItems() {
        const url = process.env.BACKEND_URL + "api/items";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setItems(data);
            });
    }

    function getCustomers() {
        const url = process.env.BACKEND_URL + "api/costumers";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setCustomers(data);
            });
    }

    function changeTodoStatus(id) {
        const url = process.env.BACKEND_URL + "api/updatetodo/" + id;
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                getTodos();
            });
    }


    function renderEndedTodos() {
        for (let i = 0; i < items.length; i++) {
            itemsNames[items[i].id] = items[i].name;
        }
        for (let i = 0; i < customers.length; i++) {
            customersNames[customers[i].id] = customers[i].name;
        }

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Task</th>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {endedTodos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.category}</td>
                            <td>{todo.task}</td>
                            <td>{todo.costumer_id}</td>
                            {/*if cosumer_id is not null find costumer name*/}
                            <td>{todo.costumer_id ? customersNames[todo.costumer_id] : ""}</td>
                            <td>{todo.item_id}</td>
                            {/*if item_id is not null find item name*/}
                            <td>{todo.item_id ? itemsNames[todo.item_id] : ""}</td>
                            <td>
                                <button className="btn btn-danger" onClick={(e) => changeTodoStatus(todo.id)}>Not Done</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    function renderNotEndedTodos() {
        for (let i = 0; i < items.length; i++) {
            itemsNames[items[i].id] = items[i].name;
        }
        for (let i = 0; i < customers.length; i++) {
            customersNames[customers[i].id] = customers[i].name;
        }

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Task</th>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {notEndedTodos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.category}</td>
                            <td>{todo.task}</td>
                            <td>{todo.costumer_id}</td>
                            {/*if cosumer_id is not null find costumer name*/}
                            <td>{todo.costumer_id ? customersNames[todo.costumer_id] : ""}</td>
                            <td>{todo.item_id}</td>
                            {/*if item_id is not null find item name*/}
                            <td>{todo.item_id ? itemsNames[todo.item_id] : ""}</td>
                            <td>
                                <button className="btn btn-success" onClick={(e) => changeTodoStatus(todo.id)}>Done</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }


    return (
        // Create a button to send to item wizard
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="mt-3">Todo list</h2>
                </div>
                <div className="col d-flex justify-content-end">
                    <Link to="/admin/todoWizard" className="my-auto">
                        <button className="btn btn-primary">Create todo</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>Not ended todos</h5>
                    {renderNotEndedTodos()}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>Ended todos</h5>
                    {renderEndedTodos()}
                </div>
            </div>
        </div>
    );
};