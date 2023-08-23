import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ModifyItem = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    let params = useParams();
    let itemId = params.itemId.substring(1);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let url = process.env.BACKEND_URL + "api/item/" + itemId;
        console.log("url", url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data.visible);
                setName(data.name);
                setCategory(data.category);
                const selectCategory = document.getElementById("selectCategory");
                if (data.category === "Books") {
                    selectCategory.selectedIndex = 0;
                } else if (data.category === "Toys") {
                    selectCategory.selectedIndex = 1;
                } else if (data.category === "Music") {
                    selectCategory.selectedIndex = 2;
                }
                setDescription(data.description);
                setPrice(data.price);
                setStock(data.stock);
                setImageUrl(data.imageUrl);
                setIsVisible(data.visible);
                const checkBox = document.getElementById("visibleCheck");
                if (data.visible) {
                    checkBox.checked = true;
                } else {
                    checkBox.checked = false;
                }
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = process.env.BACKEND_URL + "api/item/" + itemId;
        const headers = {
            "Content-Type": "application/json",
        };
        const body = {
            name: name,
            category: category,
            description: description,
            price: price,
            stock: stock,
            isVisible: isVisible,
        };
        const options = {
            method: "PUT",
            headers,
            body: JSON.stringify(body),
        };

        fetch(url, options)
            .then((response) => {
                if (response.status === 200) {
                    alert("Item modified successfully");
                } else {
                    alert("Error modifying item");
                }
            }
            );
    };

    return (
        <div className="container">
            <h2 className="mt-3">Create item</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label"> Name: </label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Category: </label>
                    <select className="form-select" id="selectCategory" aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
                        <option value="Books">Books</option>
                        <option value="Toys">Toys</option>
                        <option value="Music">Music</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Description: </label>
                    <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Price: </label>
                    <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Stock: </label>
                    <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} />
                </div>

                <div className="mb-3 form-check">
                    <label className="form-check-label"> Is Visible </label>
                    <input id="visibleCheck" type="checkbox" className="form-check-input" onChange={(e) => setIsVisible(e.target.checked)} />
                </div>

                <div className="container d-flex justify-content-center mb-3">
                    <button type="submit" className="btn bg-primary-subtle">Modify item</button>
                </div>

            </form>
        </div>
    );
};