import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
    //logic get numer of items from flux





    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-2 ">
                <div className="col">
                <h3 style={{padding:"10px"}}>Billing Address</h3>
            <div class="row row-cols-1 row-cols-md-2 g-2" style={{padding: "15px"}}>
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
            </div>
            <form class="row g-3" style={{padding: "15px"}}>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4/"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="sameAddress"/>
                    <label class="form-check-label" for="sameAddress">
                        Shipping address is the same as my billing address
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="saveInfo"/>
                    <label class="form-check-label" for="saveInfo">
                        Save this information for next time
                    </label>
                    </div>
                </div>
                <h3>Payment</h3>
                <fieldset class="row mb-3">
                    <div class="col-sm-10">
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
                    <div class="row row-cols-1 row-cols-md-2 g-2" style={{padding: "10px"}}>
                    <div class="col">
                        <label for="nameCard" class="form-label">Name on Card</label>
                        <input type="text" class="form-control" aria-label="nameCard"/>
                    </div>
                    <div class="col">
                        <label for="cardNumber" class="form-label">Credit Card Number</label>
                        <input type="text" class="form-control" aria-label="cardNumber"/>
                    </div>
                    <div class="col">
                        <label for="expiration" class="form-label">Expiration</label>
                        <input type="text" class="form-control" aria-label="expiration"/>
                    </div>
                    <div class="col">
                        <label for="CVV" class="form-label">CVV</label>
                        <input type="text" class="form-control" aria-label="CVV"/>
                    </div>
                    </div>
                    </div>
                </fieldset>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Continue to Chekout</button>
                </div>
                </form>
                </div>
                <div className="col"></div>
            </div>
            
        </div>
    );

    // return (
    //     <div className="container">
    //         <h2 className="my-3">Shopping Cart</h2>
    //         <div className="mt-5">
    //             <div className="row mx-2 mb-2 align-items-center">
    //                 <div className="col-md-3 text-center">
    //                     <img className="img-fluid" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
    //                 </div>
    //                 <div className="col-md-7">
    //                     <div className="row mt-3 align-items-center">
    //                         <div className="col-md-7">
    //                             <div className="col-md-12 text-wrap">Product name xxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx</div>
    //                             <div className="col-12 text-primary text-opacity-50"><h6><span>$</span>00.00</h6></div>
    //                         </div>
    //                         <div className="col-md-5 px-5">
    //                             <div className="form-outline" >
    //                                 <input min="0" type="number" id="typeNumber" className="form-control text-center" />

    //                             </div>
    //                         </div>

    //                     </div>
    //                 </div>
    //                 <div className="col-md-2 text-center">
    //                     <button type="button" className="btn btn-outline ">
    //                         <i className="fa-solid fa-trash fa-xl"></i>
    //                     </button>
    //                 </div>
    //             </div>
    //             <hr></hr>
    //             <div className="row mx-5">
    //                 <div className="col-6">
    //                     <strong>Subtotal</strong>
    //                     <br></br>
    //                     <small >Shipping</small>

    //                 </div>
    //                 <div className="col-6">
    //                     <div className="text-end"><span>$</span><span>00.00</span></div>
    //                     <div className="text-end"><span>-</span></div>
    //                 </div>
    //             </div>
    //             <hr ></hr>
    //             <div className="row mx-5">
    //                 <div className="col-6">
    //                     <strong>Order Total</strong>
    //                 </div>
    //                 <div className="col-6">
    //                     <div className="text-end text-primary text-opacity-50 fw-bold"><span>$</span><span>00.00</span></div>
    //                 </div>
    //             </div>
    //             <div className="container d-flex justify-content-center my-3">
    //                 <button className="btn bg-primary-subtle ">
    //                     <Link className="text-dark link-underline link-underline-opacity-0" to="/checkout">Checkout</Link>
    //                 </button>
    //             </div>
    //         </div>

    //     </div>

    // );
};