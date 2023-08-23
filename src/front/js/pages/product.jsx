import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Product = () => {
    const handleAddToCart = (event) => {
        
      // TODO: Handle add to cart
    };


    return (
        
        <div className="container">                
            <div className="mt-5">
                <div className="row mx-2 mb-2">
                    <div className="col-md-7 text-center">
                        <img src="https://dummyimage.com/600x700/000/fff" id="image_detail"  alt="..."  />
                    </div>
                    <div className="col-md-5">
                        
                        
                        <div className="col-md-12 text-wrap mb-3">
                            <h4>Product name xxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx</h4>
                        </div>
                        <div className="col-12 text-primary text-opacity-50 mb-3">
                            <h4><span>$</span>00.00</h4>
                        </div>
                        <div className="col-md-12 text-wrap mb-3">
                                <h6>Color : </h6>                                
                        </div>
                        <div>
                            
                            <button type="button" className="btn btn-outline-secondary">Black</button>
                            <button type="button" className="btn btn-outline-secondary">White</button>
                            <button type="button" className="btn btn-outline-secondary">Gray</button>
                            
                        </div>
                        <div className="col-md-12 text-wrap mb-3">
                                <h6>Talla : </h6>                                
                        </div>
                        <div>
                            
                            <button type="button" className="btn btn-outline-secondary">S</button>
                            <button type="button" className="btn btn-outline-secondary">M</button>
                            <button type="button" className="btn btn-outline-secondary">L</button>
                            
                        </div>
                                                    
                        <div className="row">
                            <div className="col-md-9 px-5 d-grid">
                                <button type="button" className="btn bg-primary-subtle" onClick={(e) => setPassword()}>Add to cart</button>
                            </div> 
                            <div className="col-md-3 text-center">
                                <button type="button" className="btn btn-outline ">
                                <i class="fa-regular fa-heart fa-lg"></i>
                                </button>
                            </div>
                        </div>
                        
                        
                        
                    </div>
                    
                </div>
            
            </div>
                <h4>Related products</h4>
            <div>

            </div>
            
        </div>
            
        
        

    );
};