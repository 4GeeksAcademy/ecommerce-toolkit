import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
    //logic get numer of items from flux


    return (
        <div className="container py-5">
            <h2 className=" border">About Us</h2>
            <div className="mt-5 border">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>

        </div>

    );
};