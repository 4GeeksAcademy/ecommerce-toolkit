import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RelatedProducts } from "../component/relatedProducts.jsx";

export const BooksCategory = () => {


    return (

        <div className="container-fluid">

            <div className="row">
                <div className="col-auto col-sm-3 col-xl-2 px-2 px-0 bg-light">
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <ul class="list-unstyled ps-0">
                            <li class="mb-2" >
                                <button id="downArrow" class="btn btn-toggle align-items-center rounded collapsed text-secondary p-0 mb-2" data-bs-toggle="collapse" data-bs-target="#price-collapse" aria-expanded="true">
                                    <span><i class="fa-solid fa-chevron-down rotate-icon"></i> </span>
                                    <span className="ps-2 ">Sort By</span>
                                </button>
                                <div class="collapse show" id="price-collapse">
                                    <div class="btn-toggle-nav list-unstyled fw-normal pb-1 ">

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="price" id="lowToHigh" value="option1" />
                                            <label class="form-check-label fs-6 fw-light" for="lowToHigh">
                                                Price: Low to High
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="price" id="highToLow" value="option2" />
                                            <label class="form-check-label fs-6 fw-light" for="highToLow">
                                                Price: High to Low
                                            </label>
                                        </div>


                                    </div>
                                </div>
                            </li>
                            <li class="mb-2">
                                <div class="d-grid">
                                    <button id="downArrow" class="btn btn-toggle align-items-center rounded collapsed text-secondary p-0 mb-2" data-bs-toggle="collapse" data-bs-target="#priceRange-collapse" aria-expanded="true">
                                        <span >Price Range</span>
                                        <span ><i class="fa-solid fa-chevron-down rotate-icon"></i> </span>
                                        
                                    </button>
                                </div>
                                
                                <div class="collapse show" id="priceRange-collapse" >
                                    <div class="btn-toggle-nav list-unstyled row ">
                                        
                                            <div class="col m-0 p-1">
                                                <input type="text" class="form-control fs-6 fw-light" placeholder="Min Price" aria-label="Min Price"/>
                                            </div>
                                            <div class="col m-0 p-1">
                                                <input type="text" class="form-control fs-6 fw-light" placeholder="Max Price" aria-label="Max Price"/>
                                            </div>
                                        
                                    </div>
                                </div>
                            </li>


                        </ul>

                    </div>
                </div>
                <div className="col py-3">
                    <div className="mt-3 ms-4">

                        <h3 className="fw-bolder mb-4">Books</h3>
                        <div className="row">
                            <div className="col-md-3 mb-5">
                                <div className="card h-100">

                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                    <div className="card-body p-4">
                                        <div className="text-center">

                                            <h6 className="fw-bolder">Product Name</h6>
                                            $00.00
                                        </div>
                                    </div>

                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <Link to={"/product/theid"}>
                                                <button type="button" className="btn bg-primary-subtle mt-auto me-3" onClick={(e) => handleDetails()}>View Details</button>
                                            </Link>
                                            <button type="button" className="btn btn-outline mt-auto" onClick={(e) => handleLike()}>
                                                <i className="fa-regular fa-heart fa-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-5">
                                <div className="card h-100">

                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">

                                            <h6 className="fw-bolder">Product Name</h6>

                                            <span>$00.00</span>

                                        </div>
                                    </div>

                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <Link to={"/product/theid"}>
                                                <button type="button" className="btn bg-primary-subtle mt-auto me-3" onClick={(e) => handleDetails()}>View Details</button>
                                            </Link>
                                            <button type="button" className="btn btn-outline mt-auto" onClick={(e) => handleLike()}>
                                                <i className="fa-regular fa-heart fa-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-5">
                                <div className="card h-100">

                                    <div className="badge bg-dark position-absolute">Sale </div>

                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

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
                                                <button type="button" className="btn bg-primary-subtle mt-auto me-3" onClick={(e) => handleDetails()}>View Details</button>
                                            </Link>
                                            <button type="button" className="btn btn-outline mt-auto" onClick={(e) => handleLike()}>
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





        </div>




    );
};