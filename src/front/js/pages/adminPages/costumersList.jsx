import React from "react";
import { useState, useEffect } from "react";

export const CostumersList = () => {
    const [sortMethod, setSortMethod] = useState("id");
    const [allCostumers, setAllCostumers] = useState([]);

    useEffect(() => {
        let url = String(process.env.BACKEND_URL + "api/costumers");
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                data.sort((a, b) => {
                    if (a[sortMethod] < b[sortMethod]) {
                        return -1;
                    }
                    if (a[sortMethod] > b[sortMethod]) {
                        return 1;
                    }
                    return 0;
                });
                setAllCostumers(data);
            })
    }, [sortMethod]);

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
        setAllCostumers(allCostumers.map((costumer) => {
            if (costumer.id === id) {
                costumer.is_admin = true;
            }
            return costumer;
        }));

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h2 className="mt-3">Costumers list</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setSortMethod(e.target.value)}>
                        <option defaultValue="id">Sort by ID</option>
                        <option value="name">Sort by name</option>
                        <option value="email">Sort by email</option>
                        <option value="is_admin">Sort by admin</option>
                    </select>
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
                        <th scope="col">Send Message</th>
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
                            {/*Link to email customers*/}
                            <td><a href={"mailto:" + costumer.email + "?subject=Alo%20from%20ecommerce%20toolkit"} className="btn btn-primary btn-sm">Send Email</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}