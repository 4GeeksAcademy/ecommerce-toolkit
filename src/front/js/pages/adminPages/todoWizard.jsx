import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../store/appContext";

export const TodoWizard = () => {
    const { store, actions } = useContext(Context);
    const [items, setItems] = useState([]);
    const [costumers, setCostumers] = useState([]);
    const user = store.user;

    const [category, setCategory] = useState("Other");
    const [task, setTask] = useState("");
    const [done, setDone] = useState(false);
    const [costumerId, setCostumerId] = useState(null);
    const [itemId, setItemId] = useState(null);

    useEffect(() => {
        getItems();
        getCostumers();
    }, []);

    const getItems = async () => {
        const url = process.env.BACKEND_URL + "api/items";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
            });
    }

    const getCostumers = async () => {
        const url = process.env.BACKEND_URL + "api/costumers";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCostumers(data);
            });
    }

    function renderBasedOnCategory() {
        if (category == "Costumer") {
            return (
                <div className="mb-3">
                    <label className="form-label"> Costumer: </label>
                    <select className="form-select" value={costumerId} onChange={(e) => setCostumerId(e.target.value)}>
                        <option defaultValue={1}>Select a costumer</option>
                        {costumers.map((costumer, index) => {
                            return (
                                <option key={index} value={costumer.id}>{costumer.name}</option>
                            )
                        })}
                    </select>
                </div>
            )
        } else if (category == "Item") {
            return (
                <div className="mb-3">
                    <label className="form-label"> Item: </label>
                    <select className="form-select" value={itemId} onChange={(e) => setItemId(e.target.value)}>
                        <option defaultValue={1}>Select an item</option>
                        {items.map((item, index) => {
                            return (
                                <option key={index} value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
            )
        } else {
            return null;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let selectedCostumerId = null;
        let selectedItemId = null;
        if (category == "Costumer") {
            selectedCostumerId = costumerId;
            selectedItemId = null;
        }
        if (category == "Item") {
            selectedCostumerId = null;
            selectedItemId = itemId;
        }
        const body = {
            category: category,
            task: task,
            done: done,
            costumerId: selectedCostumerId,
            itemId: selectedItemId
        };
        console.log(JSON.stringify(body));
        const url = process.env.BACKEND_URL + "api/newtodo";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                alert("Todo created successfully");
            }
            )
    }


    return (
        <div className="container">
            <h2 className="mt-3">Create todo</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label"> Task: </label>
                    <input type="text" className="form-control" value={task} onChange={(e) => setTask(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Category: </label>
                    <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option defaultValue="Other">Other</option>
                        <option value="Costumer">Costumer</option>
                        <option value="Item">Item</option>
                    </select>
                </div>

                {/*Add a section depending the category selected*/}
                {renderBasedOnCategory()}
                {/*End of section*/}

                {/*Create submit button*/}
                <div className="container d-flex justify-content-center mb-3">
                    <button type="submit" className="btn bg-primary-subtle" onClick={handleSubmit}>Create todo</button>
                </div>
                {/*End of submit button*/}
            </form>
        </div>
    );
}

