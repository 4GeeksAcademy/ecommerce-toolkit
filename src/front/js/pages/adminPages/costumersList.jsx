import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CostumersList = () => {

    const [allCostumers, setAllCostumers] = useState([]);
    const [change, setChange] = useState(0);
    useEffect(() => {
        let url = String(process.env.BACKEND_URL + "api/costumers");
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setAllCostumers(data);
            })
    });

    function makeAdmin(event) {
        let id = event.target.id;
        console.log(id);
        let url = String(process.env.BACKEND_URL + "api/costumeradmin/" + id);
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });
        setChange(change + 1);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h2 className="mt-3">Costumers list</h2>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Costumer ID</th>
                        <th scope="col">Costumer name</th>
                        <th scope="col">Costumer email</th>
                        <th scope="col">Is Admin</th>
                        <th scope="col">Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {allCostumers.map((costumer) => (
                        <tr key={costumer.id}>
                            <th scope="row">{costumer.id}</th>
                            <td>{costumer.name}</td>
                            <td>{costumer.email}</td>
                            <td>{String(costumer.is_admin)}</td>
                            <td><button type="button" id={costumer.id} className="btn btn-success btn-sm" onClick={makeAdmin} >X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}