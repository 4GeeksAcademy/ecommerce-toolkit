import React, {useState} from "react";

export const CreateItem = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isVisibile, setIsVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, category, description, price, stock, imageUrl, isVisibile)
      // TODO: Handle form submission
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
                        <option selected value="first category">One</option>
                        <option value="second category">Two</option>
                        <option value="Third category">Three</option>
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

                <div className="mb-3">
                    <label className="form-label"> Image URL: </label>
                    <input type="text" className="form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
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