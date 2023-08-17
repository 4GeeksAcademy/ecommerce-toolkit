import React from "react";
import { Link } from "react-router-dom";

export const Categories = () => {
	return(
        <div>
            <ul class="nav justify-content-center nav-tabs " style={{paddingTop: "30px"}}>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Popular</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nuevo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ultimas Unidades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Promocion</a>
                </li>
            </ul>
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{padding: "15px"}}>
                <div class="col">
                    <div class="card">
                    <img src="https://estampadosdreamagine.com.co/wp-content/uploads/2019/07/SACOS-WALLIE-Y-EVA-B-1.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://estampadosdreamagine.com.co/wp-content/uploads/2019/07/SACOS-WALLIE-Y-EVA-B-1.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://estampadosdreamagine.com.co/wp-content/uploads/2019/07/SACOS-WALLIE-Y-EVA-B-1.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://estampadosdreamagine.com.co/wp-content/uploads/2019/07/SACOS-WALLIE-Y-EVA-B-1.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
         
	);
};


