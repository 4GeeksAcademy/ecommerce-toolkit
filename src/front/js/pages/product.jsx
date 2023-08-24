import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RelatedProducts } from "../component/relatedProducts.jsx";

export const Product = () => {
    const handleAddToCart = (event) => {
        
      // TODO: Handle add to cart
    };


    return (
        
        <div className="container">                
            <div className="mt-5">
                <div className="row mx-2 mb-2">
                    <div className="col-md-7 text-center ">
                        <img src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..."  className="img-fluid mx-auto"/>
                    </div>
                    <div className="col-md-5">
                        
                        
                        <div className="col-md-12 text-wrap mb-3">
                            <h5 className="fw-bolder">Product name xxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx</h5>
                        </div>
                        
                        <div className="d-flex justify-content-start small mb-2">
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                        </div>
                        
                       
                                    
                                    

                        <div className="col-12 text-primary text-opacity-50 mb-3">
                            <h4><span>$</span>00.00</h4>
                        </div>
                        <div className="col-md-12">
                                <h6>Color : </h6>                                
                        </div>
                        <div className="col-md-12 mb-3" >
                            
                            <input type="radio" className="btn-check" name="color" id="color1" autoComplete="off" />
                            <label className="btn btn-outline-secondary mx-3" htmlFor="color1">Black</label>
                            
                            <input type="radio" className="btn-check" name="color" id="color2" autoComplete="off"/>
                            <label className="btn btn-outline-secondary me-3" htmlFor="color2">White</label>


                            <input type="radio" className="btn-check" name="color" id="color3" autoComplete="off"/>
                            <label className="btn btn-outline-secondary me-3" htmlFor="color3">Gray</label>
                        </div>
                        <div className="col-md-12">
                                <h6>Talla : </h6>                                
                        </div>
                        <div className="col-md-12 mb-3" >
                            
                            <input type="radio" className="btn-check" name="size" id="size1" autoComplete="off" />
                            <label className="btn btn-outline-secondary mx-3" htmlFor="size1">S</label>
                            
                            <input type="radio" className="btn-check" name="size" id="size2" autoComplete="off"/>
                            <label className="btn btn-outline-secondary me-3" htmlFor="size2">M</label>


                            <input type="radio" className="btn-check" name="size" id="size3" autoComplete="off"/>
                            <label className="btn btn-outline-secondary me-3" htmlFor="size3">L</label>
                        </div>
                        <div className="col-md-12">
                                <h6>Extra Details : </h6>                                
                        </div>
                        <div className="col-md-12">
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                                                                 
                        </div>
                                                    
                        <div className="row p-4">
                            <div className="col-md-9 px-5 d-grid">
                                <button type="button" className="btn bg-primary-subtle " >
                                    <i class="fa-solid fa-cart-shopping me-1"></i>
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
                <RelatedProducts/>
            </div>
                
            
        </div>
            
        
        

    );
};