import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
//import { useParams } from "react-router-dom";
import { RelatedProducts } from "../component/relatedProducts.jsx";
import { Context } from "../store/appContext";
import "../../styles/booksCategory.css";

export const BooksCategory = () => {
    const [books, setBooks] = useState([])
    //const itemId = useParams().itemId.substring(1);
    const [change, setChange] = useState(0);
    const { store, actions } = useContext(Context);
    const user = store.user;


    useEffect(() => {
        fetchData();
        //fetchWhishList();
    }, []);

    const fetchData = async () => {
        let url = process.env.BACKEND_URL + "api/items";
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success items:", data);
                const onlyBooks = []
                for (let i = 0; i < data.length; i++) {
                    if (data[i].category == "Books") {
                        onlyBooks.push(data[i]);
                        setBooks(onlyBooks)
                    }
                };
            });
    };
    console.log("only books", books)
    // const fetchWhishList = async () => {
    //     let url = process.env.BACKEND_URL + "api/getwishlist/" + user;
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log("Success:", data);
    //             console.log("data", data);
    //             for (let i = 0; i < data.length; i++) {
    //                 if (data[i].item_id == itemId) {
    //                     setClassWishList("fa-solid fa-heart fa-lg");
    //                 }
    //             }
    //         });
    // };

    // const handleAddWhish = () => {
    //     if (user == null) {
    //         alert("Please login to add items to wishlist");
    //         return;
    //     }

    //     //Check if item is already in wishlist
    //     let url = process.env.BACKEND_URL + "api/getwishlist/" + user;
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log("Success:", data);
    //             console.log("data", data);
    //             for (let i = 0; i < data.length; i++) {
    //                 if (data[i].item_id == itemId) {
    //                     alert("Item already in wishlist");
    //                     return;
    //                 }
    //             }
    //             addToWishList();
    //         });

    //     const addToWishList = () => {
    //         url = process.env.BACKEND_URL + "api/addwishlist";
    //         let data = {
    //             itemId: itemId,
    //             costumerId: user
    //         };
    //         let options = {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         };
    //         fetch(url, options)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log("Success:", data);
    //                 alert("Item added to wishlist");
    //                 setClassWishList("fa-solid fa-heart fa-lg");
    //             })
    //     };

    // };
    
return (

    <div className="container-fluid mb-0">

        <div className="row">
            <div className="col-auto col-sm-3 col-xl-2 pe-2 py-5 ps-lg-5 ps-md-0 bg-light">
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
            <div className="col py-4 pe-lg-5 pe-md-0">
                <div className="mx-3">
                    <div id="title-image-books" className="d-flex align-content-center flex-wrap mb-4">

                        <h1 className="text-white mx-auto text-center ">Books</h1>

                    </div>

                    <div className="row">
                        {books.map((item, i) => (
                            <div className="col-md-4 mb-5" key={i}>
                                <div className="card h-100">

                                    {item.sale_price == null ?
                                    <><img className="card-img-top" src={item.image_url} alt="..." /></>
                                    : <>
                                        <div className="badge bg-dark position-absolute">Sale </div>
                                        <img className="card-img-top" src={item.image_url} alt="..." />
                                    </>}

                                    <div className="card-body p-0 pt-2">
                                        <div className="text-center">

                                            <h6 className="fw-bolder">{item.name}</h6>
                                            {item.sale_price == null ?
                                                <p>{item.price}</p>
                                                : <p>
                                                    <span className="text-muted text-decoration-line-through">{item.price}</span>{item.sale_price}
                                                </p>}
                                        </div>
                                    </div>

                                    <div className="card-footer pt-0 pb-3 border-top-0 bg-transparent">
                                        <div className="row text-center">
                                            <div className="col-8"> 
                                                <Link to={"/product/:" + item.id} >
                                                    <button type="button" className="btn bg-primary-subtle mx-auto px-3">View Details</button>
                                                </Link>
                                            </div>
                                            
                                            <div className="col-4">
                                                <button type="button" className="btn btn-outline mx-auto text-center" onClick={(e) => handleLike()}>
                                                    <i className="fa-regular fa-heart fa-lg"></i>
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>

                </div>

            </div>
        </div>





    </div>




);
};