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
                    <div className="col-md-7 text-center ">
                        <img src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..."  className="img-fluid mx-auto"/>
                    </div>
                    <div className="col-md-5">
                        
                        
                        <div className="col-md-12 text-wrap mb-3">
                            <h5 className="fw-bolder">Product name xxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxx</h5>
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
            <div className="py-5">
                <div className="px-4 mt-5">
                    <h3 className="fw-bolder mb-4">Related products</h3>
                    <div className="row">
                    <div className="col-md-3 mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h6 className="fw-bolder">Product Name</h6>
                                    $00.00 
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <Link to={"/product/theid"}>
                                        <button type="button" className="btn bg-primary-subtle mt-auto me-3">View Details</button>
                                    </Link>
                                    <button type="button" className="btn btn-outline mt-auto">
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-5">
                        <div className="card h-100">
                                                       
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h6 className="fw-bolder">Product Name</h6>                                                              
                                    
                                    <span>$00.00</span>
                                    
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <Link to={"/product/theid"}>
                                        <button type="button" className="btn bg-primary-subtle mt-auto me-3">View Details</button>
                                    </Link>
                                    <button type="button" className="btn btn-outline mt-auto">
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-5">
                        <div className="card h-100">
                           
                            <div className="badge bg-dark position-absolute">Sale </div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h6 className="fw-bolder">Sale Product Name</h6>
                                    
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <Link to={"/product/theid"}>
                                        <button type="button" className="btn bg-primary-subtle mt-auto me-3">View Details</button>
                                    </Link>
                                    <button type="button" className="btn btn-outline mt-auto">
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h6 className="fw-bolder">Popular Product Name</h6>                                                                       
                                    
                                    $40.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <Link to={"/product/theid"} >
                                        <button type="button" className="btn bg-primary-subtle mt-auto me-3">View Details</button>
                                    </Link>
                                    <button type="button" className="btn btn-outline mt-auto">
                                        <i className="fa-regular fa-heart fa-lg"></i>
                                    </button>
                                </div>                                                                    
                            </div>
                        </div>
                    </div>
                    </div>
                    
                
                </div>

            </div>
                
            
        </div>
            
        
        

    );
};