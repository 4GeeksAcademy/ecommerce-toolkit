import React, { useState } from "react";
import { Map } from "../component/map.jsx";


export const AboutUs = () => {   
    

    return (
        <div className="container py-5">
            <h2>About Us</h2>
            <div className="mt-5">               
                <div className="bg-light">
                    <div className="container py-4">
                        <div className="row h-100 align-items-center py-3">
                            <div className="col-lg-5">
                                <h1 className="display-6 text-center pb-4">Welcome to VRN</h1>                                
                            </div>
                            <div className="col-lg-7 px-3">
                                <h5 className="text-body-secondary lh-lg text-start">
                                    Our e-commerce is a web page build by our team and where we apply all our knowledge of both backend and frontend.
                                    In it you can navigate as a client and as an administrator, in addition to being able to add products and run a business on the back of the page.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>                

                <div className="bg-white py-5">
                    <div className="container py-5">
                        <div className="row mb-4">
                            <div className="col-lg-12">
                                <h2 className="display-6 font-weight-light text-center">Meet our team</h2>                                
                            </div>
                        </div>

                        <div className="row text-center">

                            <div className="col-md-4 mb-5">
                                <div className="bg-light rounded shadow-sm py-4 px-4"><img src="https://thenounproject.com/api/private/icons/4216248/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="" width="100" className="img-fluid rounded-circle mb-3 shadow-sm" />
                                    <h5 className="mb-3">Rodrigo Alfonsin</h5>
                                    <p className="text-body-secondary">
                                        Back and front web developer.                                        
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="bg-light rounded shadow-sm py-4 px-4"><img src="https://thenounproject.com/api/private/icons/4216248/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="" width="100" className="img-fluid rounded-circle mb-3 shadow-sm" />
                                    <h5 className="mb-3">Verónica Jiménez</h5>
                                    <p className="text-body-secondary">
                                        Back and front web developer.                                        
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <div className="bg-light rounded shadow-sm py-4 px-4"><img src="https://thenounproject.com/api/private/icons/4216248/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="" width="100" className="img-fluid rounded-circle mb-3 shadow-sm" />
                                    <h5 className="mb-3">Nicolas Rodríguez</h5>
                                    <p className="text-body-secondary">
                                        Back and front web developer.                                        
                                    </p>
                                </div>
                            </div>                                           
                        </div>
                    </div>
                </div>

                <div className="bg-light py-5">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-lg-12">
                                <h2 className="display-6 font-weight-light text-center">Were to find us?</h2>                                
                            </div>
                        </div>

                        <div className="mx-auto w-75">                            
                            <Map/>                                                                                                  
                        </div>
                    </div>
                </div>                

            </div>
        </div>

    );
};