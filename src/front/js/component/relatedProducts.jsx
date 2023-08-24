import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RelatedProducts = () => {
    //logic 


    return (
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

    )
}