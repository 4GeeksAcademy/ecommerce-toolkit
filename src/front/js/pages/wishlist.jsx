import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Wishlist = () => {
    const handleAddToCart = (event) => {
        
      // TODO: Handle add to cart
    };


    return (
        <div>
            <div className="container">
                <h2 className="my-3">Wish List</h2>
                {/* In Stock */}
                <div className="mt-5">
                    <div className="row mx-2 mb-2 align-items-center">
                        <div className="col-md-3 text-center">
                            <img className="img-fluid" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
                        </div>
                        <div className="col-md-9">
                            <div className="row mt-3 align-items-center">
                                <div className="col-md-4">
                                    <div className="col-md-12 text-wrap">Product name xxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx</div>
                                    <div className="col-12 text-primary text-opacity-50"><h6><span>$</span>00.00</h6></div>
                                </div>
                                <div className="col-md-3 px-5">
                                    <div className="text-secondary" >
                                        In Stock

                                    </div>
                                </div>
                                <div className="col-md-3 px-5">
                                    <button type="button" className="btn bg-primary-subtle" onClick={(e) => setPassword()}>Add to cart</button>
                                </div>
                                <div className="col-md-2 text-center">
                                    <button type="button" className="btn btn-outline ">
                                        <i className="fa-solid fa-trash fa-xl"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                </div>
                {/* Out of Stock */}
                <div className="mt-5">
                    <div className="row mx-2 mb-2 align-items-center">
                        <div className="col-md-3 text-center">
                            <img className="img-fluid" src="//c1.staticflickr.com/1/466/19681864394_c332ae87df_t.jpg" />
                        </div>
                        <div className="col-md-9">
                            <div className="row mt-3 align-items-center">
                                <div className="col-md-4">
                                    <div className="col-md-12 text-wrap">Product name xxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx</div>
                                    <div className="col-12 text-primary text-opacity-50"><h6><span>$</span>00.00</h6></div>
                                </div>
                                <div className="col-md-3 px-5">
                                    <div className="text-danger text-opacity-50" >
                                        Out of Stock

                                    </div>
                                </div>
                                <div className="col-md-3 px-5">
                                    <button type="button" className="btn bg-primary-subtle" onClick={(e) => setPassword()} disabled>Add to cart</button>
                                </div>
                                <div className="col-md-2 text-center">
                                    <button type="button" className="btn btn-outline" >
                                        <i className="fa-solid fa-trash fa-xl"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                </div>
            </div>
            
        </div>
        

    );
};