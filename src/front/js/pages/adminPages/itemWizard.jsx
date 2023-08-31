import React, { useEffect, useState } from "react";

export const CreateItem = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Books");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [salePrice, setSalePrice] = useState(null);

    useEffect(() => {
        let url = "https://random.imagecdn.app/300/300";
        fetch(url)
            .then((response) => String(response.url))
            .then((data) => {
                setImageUrl(String(data));
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        let body = {
            name: name,
            category: category,
            description: description,
            price: price,
            stock: stock,
            imageUrl: imageUrl,
            isVisible: isVisible,
            salePrice: salePrice
        }
        console.log(JSON.stringify(body));
        console.log(process.env.BACKEND_URL + "api/newitem");
        fetch(process.env.BACKEND_URL + "api/newitem", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                alert("Item created successfully");
            }
            )
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
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
                        <option defaultValue="Books">Books</option>
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
                    <label className="form-label"> Sale Price: </label>
                    <input type="number" className="form-control" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Stock: </label>
                    <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} />
                </div>

                <div className="mb-3 form-check">
                    <label className="form-check-label"> Is Visible </label>
                    <input type="checkbox" className="form-check-input" onChange={(e) => setIsVisible(e.target.checked)} />
                </div>

                <div className="container d-flex justify-content-center mb-3">
                    <button type="submit" className="btn bg-primary-subtle">Create item</button>
                </div>

            </form>
        </div>
    );
};