import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Wishlist = () => {
    const [stockItems, setStockItems] = useState([]);
    const [outOfStockItems, setOutOfStockItems] = useState([]);
    const { store, actions } = useContext(Context);
    const user = store.user;

    useEffect(() => {
        fetchWishlist();
    }, []);

    const fetchWishlist = async () => {
        let url = process.env.BACKEND_URL + "api/getwishlist/" + user;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                //get items info using wishlist
                url = process.env.BACKEND_URL + "api/items";
                fetch(url)
                    .then((response) => response.json())
                    .then((data2) => {
                        for (let i = 0; i < data.length; i++) {
                            for (let j = 0; j < data2.length; j++) {
                                if (data[i].item_id == data2[j].id) {
                                    if (data2[j].stock > 0) {
                                        setStockItems(stockItems => [...stockItems, data2[j]]);
                                    } else {
                                        setOutOfStockItems(outOfStockItems => [...outOfStockItems, data2[j]]);
                                    }
                                }
                            }
                        }
                    })
            });
    };



    const handleAddToCart = (event) => {
        //add to cart
        const item_id = event.target.id;
        const user_id = user;
    };

    const handleRemoveFromWishlist = (event) => {

    };


    return (
        <div className="container">
            <h2 className="my-3">Wish List</h2>
            {/* Map elements in stock */}
            {stockItems.map((item) => (
                <div className="mt-5" key={item.id}>
                    <div className="row mx-2 mb-2 align-items-center">
                        <div className="col-md-3 text-center">
                            <Link className="text-dark link-underline link-underline-opacity-0" to={"/product/" + item.id}>
                                <img className="img-thumbnail" src={item.image_url} width={"100px"} />
                            </Link>
                        </div>
                        <div className="col-md-9">
                            <div className="row mt-3 align-items-center">
                                <div className="col-md-4">
                                    <div className="col-md-12 text-wrap">
                                        <Link className="text-dark link-underline link-underline-opacity-0" to={"/product/" + item.id}>{item.name}</Link>
                                    </div>
                                    <div className="col-12 text-primary text-opacity-50"><h6><span>$</span>{item.price}</h6></div>
                                </div>
                                <div className="col-md-3 px-5">
                                    <div className="text-secondary" >
                                        In Stock
                                    </div>
                                </div>
                                <div className="col-md-3 px-5">
                                    <button type="button" id={item.id} className="btn bg-primary-subtle" onClick={handleAddToCart}>Add to cart</button>
                                </div>
                                <div className="col-md-2 text-center">
                                    <button type="button" className="btn btn-outline">
                                        <i className="fa-solid fa-trash fa-xl" onClick={handleRemoveFromWishlist}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* Map elements out of stock */}
            {outOfStockItems.map((item) => (
                <div className="mt-5" key={item.id}>
                    <div className="row mx-2 mb-2 align-items-center">
                        <div className="col-md-3 text-center">
                            <img className="img-thumbnail" src={item.image_url} width={"100px"} />
                        </div>
                        <div className="col-md-9">
                            <div className="row mt-3 align-items-center">
                                <div className="col-md-4">
                                    <div className="col-md-12 text-wrap">{item.name}</div>
                                    <div className="col-12 text-primary text-opacity-50"><h6><span>$</span>{item.price}</h6></div>
                                </div>
                                <div className="col-md-3 px-5">
                                    <div className="text-danger text-opacity-50" >
                                        Out of Stock
                                    </div>
                                </div>
                                <div className="col-md-3 px-5">
                                    <button type="button" className="btn bg-primary-subtle" disabled>Add to cart</button>
                                </div>
                                <div className="col-md-2 text-center">
                                    <button type="button" className="btn btn-outline" onClick={handleRemoveFromWishlist}>
                                        <i className="fa-solid fa-trash fa-xl"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};