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
    const [salePrice, setSalePrice] = useState("")
    const [stock, setStock] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    let itemId = useParams().itemId.substring(1);
    const [quantity, setQuantity] = useState(1);
    const { store, actions } = useContext(Context);
    const user = store.user;
    const [classWishList, setClassWishList] = useState("fa-regular fa-heart fa-lg");
    const [isloading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchData();
        fetchWhishList();
    }, [itemId]);

    const fetchData = async () => {
        let url = process.env.BACKEND_URL + "api/item/" + itemId;
        console.log("itemId", itemId);
        setIsLoading(true)
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
                setSalePrice(data.sale_price)
                setIsLoading(false)
            });
    };

    const fetchWhishList = async () => {
        let url = process.env.BACKEND_URL + "api/getwishlist/" + user;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                console.log("data", data);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].item_id == itemId) {
                        setClassWishList("fa-solid fa-heart fa-lg");
                    }
                }
            });
    };

    const addToCart = () => {
        if (user == null) {
            alert("Please login to add items to cart");
            return;
        }
        //check if item is already in cart
        let url = process.env.BACKEND_URL + "api/checkcartitem";
        let body = {
            itemId: itemId,
            costumerId: user
        };
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("data", data);
                if (data != false) {
                    alert("Item already in cart");
                    return;
                } else {
                    url = process.env.BACKEND_URL + "api/addcartitem";
                    body = {
                        itemId: itemId,
                        quantity: quantity,
                        costumerId: user
                    };
                    let options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(body),
                    };
                    fetch(url, options)
                        .then((response) => response.json())
                        .then((data) => {
                            console.log("Success:", data);
                            alert("Item added to cart");
                            actions.incrementCartItemsNumber();
                        }
                        );
                }
            }
            );
    };

    const handleAddWhish = () => {
        if (user == null) {
            alert("Please login to add items to wishlist");
            return;
        }

        //Check if item is already in wishlist
        let url = process.env.BACKEND_URL + "api/getwishlist/" + user;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                console.log("data", data);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].item_id == itemId) {
                        alert("Item already in wishlist");
                        return;
                    }
                }
                addToWishList();
            });

        const addToWishList = () => {
            url = process.env.BACKEND_URL + "api/addwishlist";
            let data = {
                itemId: itemId,
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
                    alert("Item added to wishlist");
                    setClassWishList("fa-solid fa-heart fa-lg");
                })
        };

    };

    return (

        <div className="container">
            <div className="mt-5">
                {!isloading ? (
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
                                {salePrice == null ?
                                    <h4 className="fw-bold"><span>$</span> {price}</h4>
                                    : <h4 className="fw-bold">
                                        <span className="text-body-tertiary text-decoration-line-through pe-2 fw-normal">$ {price}</span>${salePrice}
                                    </h4>}
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

                                    {stock > 0 &&
                                        <button type="button" className="btn bg-primary-subtle " onClick={addToCart}>
                                            <i className="fa-solid fa-cart-shopping me-1"></i>

                                            Add to cart
                                        </button>
                                    }
                                    {/*add button for when stock is none*/}
                                    {stock == 0 &&
                                        <button type="button" className="btn bg-danger-subtle " disabled>
                                            Item out of stock
                                        </button>
                                    }
                                </div>
                                <div className="col-md-3 text-center">

                                    <button type="button" className="btn btn-outline " onClick={handleAddWhish}>
                                        <i id="whishItem" className={classWishList}></i>

                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>) : (<div className="pt-5 d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>)
                }

            </div>
            {/* Related products */}
            <div className="py-5">
                <RelatedProducts category={category} />
            </div>


        </div>




    );
};