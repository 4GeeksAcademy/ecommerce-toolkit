import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ItemList = () => {

    const [allItems, setAllItems] = useState([]);
    useEffect(() => {
        let url = String(process.env.BACKEND_URL + "api/items");
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setAllItems(data);
            })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h2 className="mt-3">Item list</h2>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <button type="button" className="btn btn-primary">
                        <Link to={"/admin/item/wizard"} className="text-light text-decoration-none fw-bold">Create Item</Link>
                    </button>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Item ID</th>
                        <th scope="col">Item name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Image</th>
                        <th scope="col">Visible</th>
                        <th scope="col">Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {allItems.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td><img src={item.image_url} width={"50px"} className="img-thumbnail" /></td>
                            <td>{String(item.visible)}</td>
                            <td><Link to={"/admin/item/modify/:" + item.id} className="text-decoration-none"><i className="bi bi-pencil-fill" style={{ fontSize: "1.5rem" }}></i></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}