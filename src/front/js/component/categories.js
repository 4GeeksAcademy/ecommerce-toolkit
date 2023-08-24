import React from "react";
import { Link } from "react-router-dom";

export const Categories = () => {
	return(
        <div>
            <ul class="nav justify-content-center nav-tabs" id="myTab" role="tablist" style={{paddingTop: "30px"}}>
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="popular-tab" data-bs-toggle="tab" data-bs-target="#popular-tab-pane" type="a" role="tab" aria-controls="popular-tab-pane" aria-selected="true">Popular</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="nuevo-tab" data-bs-toggle="tab" data-bs-target="#nuevo-tab-pane" type="a" role="tab" aria-controls="nuevo-tab-pane" aria-selected="false">New</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="lastU-tab" data-bs-toggle="tab" data-bs-target="#lastU-tab-pane" type="a" role="tab" aria-controls="lastU-tab-pane" aria-selected="false">Last Unites</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="promo-tab" data-bs-toggle="tab" data-bs-target="#promo-tab-pane" type="a" role="tab" aria-controls="promo-tab-pane" aria-selected="false">Promotion</a>
                </li>
            </ul>

			<div class="tab-content" id="myTabContent">
            	<div class="tab-pane fade show active" id="popular-tab-pane" role="tabpanel" aria-labelledby="popular-tab" tabindex="0">
                	<div class="row" id="popular-tab-pane">	
						<div class="row row-cols-1 row-cols-md-4 g-4" style={{padding: "15px"}}>
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
                </div>
            </div>

			<div class="tab-pane fade" id="nuevo-tab-pane" role="tabpanel" aria-labelledby="nuevo-tab" tabindex="0">ESTO ES NUEVO</div>
			<div class="tab-pane fade" id="lastU-tab-pane" role="tabpanel" aria-labelledby="lastU-tab" tabindex="0">Ultimas unidades</div>
			<div class="tab-pane fade" id="promo-tab-pane" role="tabpanel" aria-labelledby="promo-tab" tabindex="0">Promociones</div>		
		</div>
	);
};


