import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RelatedProducts = (props) => {
    let category = props.category;
    const navigate = useNavigate();
    console.log("categoryFromProps", category);
    const [categoryItems, setCategoryItems] = useState([]);

    function navigateTo(path) {
        return () => navigate(path);
    }

    useEffect(() => {
        getItems();
    }, [category]);

    const getItems = async () => {
        const url = process.env.BACKEND_URL + "api/items";
        let localCategoryItems = [];
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log("getItemsResponse:", data);
                console.log("category", category);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].category == category) {
                        localCategoryItems.push(data[i]);
                    }
                }
                console.log("localCategoryItems", localCategoryItems);
                setCategoryItems(localCategoryItems);
            });
    };

    const renderItems = () => {
        console.log("categoryItems", categoryItems);
        if (categoryItems.length == 0) {
            return null;
        }
        let itemsToRender = [];
        for (let i = 1; i <= 4; i++) {
            let randomItem = categoryItems[Math.floor(Math.random() * categoryItems.length)];
            itemsToRender.push(randomItem);
        }
        console.log("itemsToRender", itemsToRender);
        return (
            <div className="row">
                {itemsToRender.map((item, index) => {
                    return (
                        <div className="col-md-3 mb-5" key={index}>
                            <div className="card h-100">
                                <img className="card-img-top" src={item.image_url} />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h6 className="fw-bolder">{item.name}</h6>
                                        <span>${item.price}</span>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <button type="button" className="btn bg-primary-subtle mt-auto me-3" onClick={navigateTo("/product/:" + item.id)}>View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };


    return (
        <div className="px-4 mt-5">
            <h3 className="fw-bolder mb-4">Related products</h3>
            {renderItems()}
        </div>
    )
}