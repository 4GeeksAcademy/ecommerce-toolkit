import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [date, setDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [promo, setPromo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle form submission
    };

    //logic get number of items from flux
    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <div className="row gx-5">
                    <div className="col-md-7">
                        <div className="row mb-4">
                            <h4 className="mt-3">Delivery Information</h4>
                            <div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label"> Name: </label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label"> Last Name: </label>
                                        <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label"> Movile Number: </label>
                                        <input type="text" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label"> Address: </label>
                                        <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label className="form-label"> Country: </label>
                                        <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} />
                                    </div>
                                    <div className="col-md-5">
                                        <label className="form-label"> City: </label>
                                        <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label"> ZIP: </label>
                                        <input type="text" className="form-control" value={zip} onChange={(e) => setZip(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-0 line"></hr>
                        <div className="row mb-3">
                            <h4 className="mt-3">Payment Detail</h4>
                            <div>
                                <div className="row">
                                    <div className="col">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                        <label class="form-check-label" for="gridRadios1">
                                        Credit Card
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                        <label class="form-check-label" for="gridRadios2">
                                        Debit Card
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                                        <label class="form-check-label" for="gridRadios3">
                                        Paypal
                                        </label>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col">
                                        <label className="form-label"> Email: </label>
                                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label"> Card Number: </label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fa fa-credit-card"></i></span>
                                            <input type="text" className="form-control" value={cardNumber} placeholder="0000 0000 0000 0000" onChange={(e) => setCardNumber(e.target.value)} />
                                        </div>

                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label"> Expiry Date: </label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                            <input type="text" className="form-control" value={date} placeholder="MM/YY" onChange={(e) => setDate(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label"> CVV: </label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                            <input type="text" className="form-control" value={cvv} placeholder="000" onChange={(e) => setCvv(e.target.value)} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                                    </div>
                                    

                    </div>
                    <div className="col-md-5">
                        <h4 className="mt-3">Order Summary</h4>
                        <div className="row mx-2 mb-2 align-items-center">
                            <div className="col-xl-3 text-center">
                                <img className="img-fluid" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
                            </div>
                            <div className="col-xl-7">
                                <div className="row mt-3 align-items-center">
                                    <div className="col-lg-7">
                                        <div className="col-lg-12 text-wrap">Product name xxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx</div>
                                        <div className="col-12 text-primary text-opacity-50"><h6><span>$</span>00.00</h6></div>
                                    </div>
                                    <div className="col-xl-5">
                                        <div className="form-outline" >
                                            <input min="0" type="number" id="typeNumber" className="form-control text-center" />

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-2 text-center">
                                <button type="button" className="btn btn-outline ">
                                    <i className="fa-solid fa-trash fa-xl"></i>
                                </button>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row mx-2">
                            <div className="col-6">
                                <strong>Subtotal</strong>
                                <br></br>
                                <small >Shipping</small>

                            </div>
                           
                            <div className="col-6">
                                <div className="text-end"><span>$</span><span>00.00</span></div>
                                <div className="text-end"><span>-</span></div>
                            </div>
                        </div>
                        <hr ></hr>
                        <div className="row">
                                    <div className="col">
                                        <label className="form-label"></label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" value={cardNumber} placeholder="Promo Code" onChange={(e) => setPromo(e.target.value)} />
                                            <button className="btn btn-secondary">Redeem</button>
                                        </div>

                                    </div>

                                </div>
                        <hr ></hr>
                        <div className="row mx-2">
                            <div className="col-6">
                                <strong>Order Total</strong>
                            </div>
                            <div className="col-6">
                                <div className="text-end text-primary text-opacity-50 fw-bold"><span>$</span><span>00.00</span></div>
                            </div>
                        </div>
                        <div className="d-grid my-3">
                            <button type="submit" className="btn bg-primary-subtle">Confirm Order</button>
                        </div>
                    </div>
                </div>

            </form>


        </div>

    );
};