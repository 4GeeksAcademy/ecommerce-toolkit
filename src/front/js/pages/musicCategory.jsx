import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/musicCategory.css";

export const MusicCategory = () => {
    const [categotyItems, setCategoryItems] = useState([])
    const [originalFetch, setOriginalFetch] = useState([])
    const [costumerWishlist, setCostumerWishlist] = useState([])
    const { store, actions } = useContext(Context);
    const user = store.user;
    const [isloading, setIsLoading] = useState(false)
    const [minValue, setMinValue] = useState()
    const [maxValue, setMaxValue] = useState()    

    useEffect(() => {
        fetchData();
        fetchWishList();
    }, []);

    const fetchData = async () => {
        let url = process.env.BACKEND_URL + "api/items";
        setIsLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success items:", data);
                const onlyCategoryItems = []
                for (let i = 0; i < data.length; i++) {
                    if (data[i].category == "Music") {
                        onlyCategoryItems.push(data[i]);
                        setOriginalFetch(onlyCategoryItems)
                        setCategoryItems(onlyCategoryItems)                        
                    }
                };
                setIsLoading(false)
            });
    };
    
    //get wishlist api;
    const fetchWishList = async () => {
        let url = process.env.BACKEND_URL + "api/getwishlist/" + user;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success wishlist:", data);
                setCostumerWishlist(data);             
                                  
            });
    };
    
    //change icon when is in wishlist    
    const wishListIcon = (id) => {
        let heartclass = "fa-regular fa-heart fa-lg"
        if (costumerWishlist.length > 0 && !isloading) {            
            costumerWishlist.map((item)=>{            
                if(id == item.item_id){
                    heartclass= "fa-solid fa-heart fa-lg"
                } 
            })           
        }  
        return heartclass      
    }

    const handleAddWish = (id) => {
        if (user == null) {
            alert("Please login to add items to wishlist");
            return;
        }

        //Check if item is already in wishlist
        let url = process.env.BACKEND_URL + "api/getwishlist/" + user;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                console.log("data", data);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].item_id == id) {
                        alert("Item already in wishlist");
                        return;
                    }
                }
                addToWishList(id);
            });

        const addToWishList = (id) => {
            url = process.env.BACKEND_URL + "api/addwishlist";
            let data = {
                itemId: id,
                costumerId: user
            };
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    alert("Item added to wishlist");
                    fetchWishList()
                })
        };

    };
        
    const comparablePrice = originalFetch.map(item => {
        if (item.sale_price === null) {
            return {...item,
                finalPrice : item.price}
        } else {
        return {...item,
            finalPrice : item.sale_price}
        }             
    }) 
    console.log('comparable price', comparablePrice)        
        
    const ascendingEvent = () => {
        let data = [...comparablePrice]
        if(data.length > 0) {
            let result = data.sort((a,b) => a.finalPrice - b.finalPrice)
            setCategoryItems(result)
        }
    }
    const descendingEvent = () => {
        let data = [...comparablePrice]
        if(data.length > 0) {
            let result = data.sort((a,b) => b.finalPrice - a.finalPrice)
            setCategoryItems(result)
        }
    }

   
    const minValueEvent = (e) => {
		setMinValue(e.target.value);
	};
    
    
    const maxValueEvent = (e) => {
		setMaxValue(e.target.value);
	};
        
         
    const rangePriceEvent = () => {
        let priceRange = comparablePrice.filter( item => {
            if (item.finalPrice >= minValue && item.finalPrice <= maxValue) {
                return true
            } else {return false}} )
        setCategoryItems(priceRange)        
    }
     
     
    
    let Prices = [];
         for (var i=0; i < comparablePrice.length ; ++i){
             Prices.push(comparablePrice[i].finalPrice);
        };         
    let maximunPrice = Math.max(...Prices)    
    
       
    return (

        <div className="container-fluid mb-0">

            <div className="row">
                {/* side bar */}
                <div className="col-auto col-sm-3 col-xl-2 pe-2 py-5 ps-lg-4 ps-md-0 bg-light">
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
                                    <div className="btn-toggle-nav pb-1 ">                                                                                   
                                        <button className="btn btn-outline-secondary btn-sm ms-3 mb-2 px-2" onClick={ascendingEvent}>
                                            Price: Low to High
                                        </button>                                       
                                        <button className="btn btn-outline-secondary btn-sm ms-3 mb-2 px-2" onClick={descendingEvent}>
                                            Price: High to Low
                                        </button>
                                        <a
                                            href="#" className="text-secondary text-center ms-3" onClick={fetchData}>
                                            Reset
                                        </a>


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
                                        <small className="text-secondary fw-small">Maximun price is: ${maximunPrice}</small>
                                        <div className="col m-0 p-1">
                                            <input type="text" className="form-control fs-6 fw-light" placeholder="Min" aria-label="Min" onChange={minValueEvent}/>
                                        </div>
                                        <div className="col m-0 p-1">
                                            <input type="text" className="form-control fs-6 fw-light" placeholder="Max" aria-label="Max" onChange={maxValueEvent}/>
                                        </div>
                                        <a
                                            href="#" className="col-12 text-secondary ms-3" onClick={rangePriceEvent}>
                                            Go
                                        </a>
                                        <a
                                            href="#" className="col-12 text-secondary ms-3" onClick={fetchData}>
                                            Reset
                                        </a>

                                    </div>
                                </div>
                            </li>


                        </ul>

                    </div>
                </div>
                
                
                <div className="col py-4 pe-lg-5 pe-md-0">
                    <div className="mx-3">
                        <div id="title-image-music" className="d-flex align-content-center flex-wrap">

                            <h1 className="text-white mx-auto text-center ">Music</h1>

                        </div>

                        {/* map card item with conditional of loading with fetch and range conditional*/}
                        {!isloading ? (
                        <div className="row ">
                            {(categotyItems.length>0 && categotyItems != undefined) ? (
                            categotyItems.map((item, i) => (
                                <div className="col-md-4 g-4" key={i}>
                                    <div className="card h-100">
                                        {/* conditional for sale price */}
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
                                                    <p>$ {item.price}</p>
                                                    : <p>
                                                        <span className="text-muted text-decoration-line-through">$ {item.price}</span>${item.sale_price}
                                                    </p>}
                                            </div>
                                        </div>

                                        <div className="card-footer pt-0 pb-3 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                <Link to={"/product/:" + item.id} >
                                                    <button type="button" className="btn bg-primary-subtle mt-auto px-4 mx-3">View Details</button>
                                                </Link>

                                                <button type="button" className="btn btn-outline mt-auto " onClick={(e) => handleAddWish(item.id)}>
                                                    <i className={wishListIcon(item.id)}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) ) : <h2 className="pt-5 text-center"> We don't have these products in stock</h2>}
                        </div>): <h2 className="pt-5 text-center"> loading... </h2>}
                    </div> 

                </div>
            </div>
        </div>
    )
};