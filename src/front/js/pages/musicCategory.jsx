import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RelatedProducts } from "../component/relatedProducts.jsx";
import "../../styles/musicCategory.css";

export const MusicCategory = () => {


    return (
        <div className="container-fluid mb-0">
            <div className="row">
                <div className="col-auto col-sm-3 col-xl-2 px-2 py-4 bg-light">
                    <div className="d-flex flex-column flex-shrink-0 px-3">
                        <ul className="list-unstyled ps-0">
                            <li className="mb-2" >
                                <div className="d-grid pb-2">
                                    <button id="downArrow" className="btn btn-toggle align-items-center rounded collapsed text-secondary p-0 text-start" data-bs-toggle="collapse" data-bs-target="#price-collapse" aria-expanded="true">
                                        <span><i className="fa-solid fa-chevron-down rotate-icon"></i> </span>
                                        <span className="ps-2">Sort By</span>
                                    </button>
                                </div>
                                <div className="collapse show" id="price-collapse">
                                    <div className="btn-toggle-nav list-unstyled fw-normal pb-1 ">

                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="price" id="lowToHigh" value="option1" />
                                            <label className="form-check-label fs-6 fw-light" htmlFor="lowToHigh">
                                                Price: Low to High
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="price" id="highToLow" value="option2" />
                                            <label className="form-check-label fs-6 fw-light" htmlFor="highToLow">
                                                Price: High to Low
                                            </label>
                                        </div>


                                    </div>
                                </div>
                            </li>
                            <li className="mb-2">
                                <div className="d-grid pb-2">
                                    <button id="downArrow" className="btn btn-toggle align-items-center rounded collapsed text-secondary p-0 text-start" data-bs-toggle="collapse" data-bs-target="#priceRange-collapse" aria-expanded="true">
                                        <span ><i className="fa-solid fa-chevron-down rotate-icon"></i> </span>
                                        <span className="ms-2">Price Range</span>
                                    </button>
                                </div>

                                <div className="collapse show" id="priceRange-collapse" >
                                    <div className="btn-toggle-nav list-unstyled row ">

                                        <div className="col m-0 p-1">
                                            <input type="text" className="form-control fs-6 fw-light" placeholder="Min Price" aria-label="Min Price" />
                                        </div>
                                        <div className="col m-0 p-1">
                                            <input type="text" className="form-control fs-6 fw-light" placeholder="Max Price" aria-label="Max Price" />
                                        </div>

                                    </div>
                                </div>
                            </li>


                        </ul>

                    </div>
                </div>
                <div className="col py-4">
                    <div className="mx-3 mt-2">
                        <div id="title-image-music" className="d-flex align-content-center flex-wrap mb-4">                                                                                   
                            
                            <h2 className="text-light mx-auto text-center">Music</h2>
                            
                        </div>

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
                        </div>

                    </div>

                </div>
            </div>
        </div>
        




    );
};