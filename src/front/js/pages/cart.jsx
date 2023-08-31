import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const [cart, setCart] = useState([]);
    const { store, actions } = useContext(Context);
    const [items, setItems] = useState([]);
    const min = Math.min;

    useEffect(() => {
        fetchCart();
        fetchItems();
    }, []);

    const fetchCart = async () => {
        const url = process.env.BACKEND_URL + "api/getcart/" + store.user;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                data.sort((a, b) => a.item_id - b.item_id);
                setCart(data);
            });
    };

    const fetchItems = async () => {
        const url = process.env.BACKEND_URL + "api/items";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setItems(data);
            });
    };

    const updateCartItem = async (itemId, quantity) => {
        const url = process.env.BACKEND_URL + "api/updatecartitem/";
        const body = {
            costumerId: store.user,
            itemId: itemId,
            quantity: quantity,
        };
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                fetchCart();
            });
    };

    const removeCartItem = async (itemId, costumerId) => {
        const url = process.env.BACKEND_URL + "api/removecartitem/";
        const body = {
            costumerId: costumerId,
            itemId: itemId,
        };
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                fetchCart();
            });
    };

    function renderTotal() {
        //Check if items is empty
        if (items.length == 0) {
            return (
                <div className="container d-flex justify-content-end">
                    <h4 className="text-primary"><span>Order Total: $</span>0</h4>
                </div>
            );
        }
        //Check if cart is empty
        if (cart.length == 0) {
            return (
                <div className="container d-flex justify-content-end">
                    <h4 className="text-primary"><span>Order Total: $</span>0</h4>
                </div>
            );
        }
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let itemInfo = items[0];
            for (let j = 0; j < items.length; j++) {
                if (items[j].id == cart[i].item_id) {
                    itemInfo = items[j];
                    break;
                }
            }
            let finalPrice = itemInfo.price;
            if (itemInfo.sale_price != null) {
                finalPrice = itemInfo.sale_price;
            }
            total += finalPrice * cart[i].quantity;
        }
        total = total.toFixed(2);
        return (
            <div className="container d-flex justify-content-end">
                <h4 className="text-primary"><span>Order Total: $</span>{total}</h4>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2>Shopping Cart</h2>
            <div className="mt-5">

                {/*Render every item on the cart*/}
                {cart.map((item) => {
                    let itemInfo = items[0];
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].id == item.item_id) {
                            itemInfo = items[i];
                            break;
                        }
                    }
                    let onSale = false;
                    if (itemInfo == null) return (null);
                    let finalPrice = itemInfo.price;
                    const quantity = min(item.quantity, itemInfo.stock);
                    if (itemInfo.sale_price != null) {
                        finalPrice = itemInfo.sale_price;
                        onSale = true;
                    }

                    return (
                        <div className="row mx-2 mb-2 align-items-center" key={itemInfo.id}>
                            <div className="col-md-3 text-center">
                                <img className="img-fluid" src={itemInfo.image_url} width={"100px"} />
                            </div>
                            <div className="col-md-7">
                                <div className="row mt-3 align-items-center">
                                    <div className="col-md-7">
                                        <div className="col-md-12 text-wrap">{itemInfo.name}</div>
                                        <div className="col-12 text-primary"><h6><span>$</span>{finalPrice}</h6></div>
                                        {/*Add special price sign if onSale is true*/}
                                        {onSale ? <div className="col-12 text-danger text-opacity-50"><h6><span>$</span>{itemInfo.price}</h6></div> : null}
                                    </div>
                                    <div className="col-md-5 px-5">
                                        <div className="form-outline" >
                                            <input
                                                min="0"
                                                max={itemInfo.stock}
                                                value={quantity}
                                                type="number"
                                                className="form-control text-center"
                                                onChange={(e) => {
                                                    updateCartItem(itemInfo.id, e.target.value);
                                                }}
                                            />
                                        </div>
                                        {/*Add message if item is out of stock*/}
                                        {itemInfo.stock == 0 ? <div className="text-danger text-opacity-50" >Out of Stock</div> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 text-center">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={(e) => { removeCartItem(itemInfo.id, store.user); }}
                                >
                                    X
                                </button>
                            </div>

                        </div>
                    );
                })}
            </div>
            <hr ></hr>
            {/*Calculate and render total*/}
            {renderTotal()}

            <hr ></hr>

            {/*Render checkout button*/}
            <div className="container d-flex justify-content-center my-3">
                <button className="btn bg-primary-subtle ">
                    <Link className="text-dark link-underline link-underline-opacity-0" to="/checkout">Checkout</Link>
                </button>
            </div>
        </div>
    );
};