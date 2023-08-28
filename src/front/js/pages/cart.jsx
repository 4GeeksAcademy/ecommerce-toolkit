import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
    // logic get numer of items from flux

     return (
         <div className="container">
             <h2 className="my-3">Shopping Cart</h2>
             <div className="mt-5">
                 <div className="row mx-2 mb-2 align-items-center">
                     <div className="col-md-3 text-center">
                         <img className="img-fluid" src="c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
                     </div>
                     <div className="col-md-7">
                         <div className="row mt-3 align-items-center">
                             <div className="col-md-7">
                                 <div className="col-md-12 text-wrap">Product name xxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx</div>
                                 <div className="col-12 text-primary text-opacity-50"><h6><span>$</span>00.00</h6></div>
                             </div>
                             <div className="col-md-5 px-5">
                                 <div className="form-outline" >
                                     <input min="0" type="number" id="typeNumber" className="form-control text-center" />

                                 </div>
                             </div>

                         </div>
                     </div>
                     <div className="col-md-2 text-center">
                         <button type="button" className="btn btn-outline ">
                             <i className="fa-solid fa-trash fa-xl"></i>
                         </button>
                     </div>
                 </div>
                 <hr></hr>
                 <div className="row mx-5">
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
                 <div className="row mx-5">
                     <div className="col-6">
                         <strong>Order Total</strong>
                     </div>
                     <div className="col-6">
                         <div className="text-end text-primary text-opacity-50 fw-bold"><span>$</span><span>00.00</span></div>
                     </div>
                 </div>
                 <div className="container d-flex justify-content-center my-3">
                     <button className="btn bg-primary-subtle ">
                         <Link className="text-dark link-underline link-underline-opacity-0" to="/checkout">Checkout</Link>
                     </button>
                 </div>
             </div>

         </div>

    );
};