import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const { store, actions } = useContext(Context);
    const [checkout, setCheckout] = useState({
        name: "",
        email: "",
        address: "",
        country: "",
        city: "",
        state: "",
        zip: ""
    });
    const [payment, setPayment] = useState({
        name: "",
        card: "",
        expiration: "",
        cvv: ""
    });
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchCart();
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const url = process.env.BACKEND_URL + "api/items";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setItems(data);
            });
    };

    const fetchCart = async () => {
        const url = process.env.BACKEND_URL + "api/getcart/" + store.user;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                data.sort((a, b) => a.item_id - b.item_id);
                setCart(data);
            });
    }

    const renderCheckoutAndPayment = () => {
        return (
            <div className="container">
                <div className="row m-2 border-bottom pb-2">
                    <div className="col">
                        <h1>Checkout</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter name"
                                    value={checkout.name}
                                    onChange={(e) => {
                                        setCheckout({ ...checkout, name: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    value={checkout.email}
                                    onChange={(e) => {
                                        setCheckout({ ...checkout, email: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="1234 Main St"
                                    value={checkout.address}
                                    onChange={(e) => {
                                        setCheckout({ ...checkout, address: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    placeholder="Country"
                                    value={checkout.country}
                                    onChange={(e) => {
                                        setCheckout({ ...checkout, country: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    placeholder="City"
                                    value={checkout.city}
                                    onChange={(e) => {
                                        setCheckout({ ...checkout, city: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="state"
                                    placeholder="State"
                                    value={checkout.state}
                                    onChange={(e) => {
                                        setCheckout({ ...checkout, state: e.target.value });
                                    }
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip">Zip</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="zip"
                                    placeholder="Zip"
                                    value={checkout.zip}
                                    onChange={(e) => {
                                        setCheckout({ ...checkout, zip: e.target.value });
                                    }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col">
                        <h1>Payment</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name on card</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Name on card"
                                    value={payment.name}
                                    onChange={(e) => {
                                        setPayment({ ...payment, name: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="card">Credit card number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="card"
                                    placeholder="Credit card number"
                                    value={payment.card}
                                    onChange={(e) => {
                                        setPayment({ ...payment, card: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expiration">Expiration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="expiration"
                                    placeholder="Expiration"
                                    value={payment.expiration}
                                    onChange={(e) => {
                                        setPayment({ ...payment, expiration: e.target.value });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cvv"
                                    placeholder="CVV"
                                    value={payment.cvv}
                                    onChange={(e) => {
                                        setPayment({ ...payment, cvv: e.target.value });
                                    }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-6 d-flex justify-content-start">
                        <Link to="/cart">
                            <button type="button" className="btn btn-primary">Back to Cart</button>
                        </Link>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <button type="button" className="btn btn-primary" onClick={handleSale}>Checkout</button>
                    </div>
                </div>
            </div>
        );
    }

    const renderSaleItems = () => {
        if (items.length === 0) return null;
        let saleItems = [];
        let total = 0;
        console.log("cart", cart);
        for (let i = 0; i < cart.length; i++) {
            let item = items.find((item) => item.id === cart[i].item_id);
            let finalPrice = item.price;
            if (item.sale_price) finalPrice = item.sale_price;
            console.log("item", item);
            if (item.stock != 0) {
                saleItems.push({
                    item_id: item.id,
                    quantity: cart[i].quantity,
                    final_price: finalPrice
                });
                total += cart[i].quantity * finalPrice;
            }
            total = Math.round(total * 100) / 100;
        }
        return (
            <div className="container">
                <div className="row m-2">
                    <div className="col-12">
                        <h1>Items</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Item</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {saleItems.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{items.find((i) => i.id === item.item_id).name}</td>
                                            <td>{item.quantity}</td>
                                            <td>${item.final_price}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-12">
                        <h1>Total</h1>
                        <h2>${total}</h2>
                    </div>
                </div>
            </div>
        );
    }

    const handleSale = () => {
        let soldItems = [];
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let item = items.find((item) => item.id === cart[i].item_id);
            let finalPrice = item.price;
            if (item.sale_price) finalPrice = item.sale_price;
            console.log("item", item);
            if (item.stock != 0) {
                soldItems.push({
                    itemId: item.id,
                    quantity: cart[i].quantity,
                    finalPrice: finalPrice
                });
                total += cart[i].quantity * finalPrice;
            }
            total = Math.round(total * 100) / 100;
        }
        const url = process.env.BACKEND_URL + "api/newsale";
        const body = {
            costumerId: store.user,
            total: total,
            soldItems: soldItems
        };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                alert("Sale completed!");
            })
            .then(() => {
                clearCart(soldItems);
            });
    };

    const clearCart = (soldItems) => {
        const url = process.env.BACKEND_URL + "api/clearcart/" + store.user;
        const body = {
            soldItems: soldItems
        };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    {renderCheckoutAndPayment()}
                </div>
                <div className="col-5">
                    {renderSaleItems()}
                </div>
            </div>
        </div>
    );
}