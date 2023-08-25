import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RelatedProducts } from "../component/relatedProducts.jsx";
import { Context } from "../store/appContext";

export const Product = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const itemId = useParams().itemId.substring(1);
    const [quantity, setQuantity] = useState(1);
    const { store, actions } = useContext(Context);
    const user = store.user;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let url = process.env.BACKEND_URL + "api/item/" + itemId;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setName(data.name);
                setCategory(data.category);
                setDescription(data.description);
                setPrice(data.price);
                setStock(data.stock);
                setImageUrl(data.image_url);
            });
    };

    const addToCart = () => {
        if (user == null) {
            alert("Please login to add items to cart");
            return;
        }
        let url = process.env.BACKEND_URL + "api/addcartitem";
        let data = {
            itemId: itemId,
            quantity: quantity,
            costumerId: user
        };
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                alert("Item added to cart");
            }
            );
    };
    const handleLike = (event) => {
        
        // TODO: Handle like
      };

    return (

        <div className="container">
            <div className="mt-5">
                <div className="row mx-2 mb-2">
                    <div className="col-md-7 text-center ">
                        <img src={imageUrl} className="img-fluid mx-auto" />
                    </div>
                    <div className="col-md-5">


                        <div className="col-md-12 text-wrap mb-3">
                            <h3 className="fw-bolder">{name}</h3>
                        </div>

                        <div className="d-flex justify-content-start small mb-2">
                            <h5 className="fw-bolder">{category}</h5>
                        </div>





                        <div className="col-12 text-primary text-opacity-50 mb-3">
                            <h4><span>$</span>{price}</h4>
                        </div>
                        <div className="col-md-12">
                            <h5>Stock: {stock} units</h5>
                        </div>
                        <div className="col-md-12">
                            <h6>Details </h6>
                        </div>
                        <div className="col-md-12">

                            <p>{description}</p>

                        </div>
                        <div className="col-md-12 d-flex flex-row mb-3">

                            <p className="my-auto mx-2">Qty:</p>
                            <input type="number" className="form-control" min="1" max={stock} value={quantity} onChange={(e) => setQuantity(e.target.value)} />

                        </div>

                        <div className="row p-4">
                            <div className="col-md-9 px-5 d-grid">

                                <button type="button" className="btn bg-primary-subtle " onClick={addToCart}>
                                    <i className="fa-solid fa-cart-shopping me-1"></i>

                                    Add to cart
                                </button>
                            </div>
                            <div className="col-md-3 text-center">

                                <button type="button" className="btn btn-outline ">
                                    <i className="fa-regular fa-heart fa-lg"></i>

                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            {/* Related products */}
            <div className="py-5">
                <RelatedProducts />
            </div>


        </div>




    );
};