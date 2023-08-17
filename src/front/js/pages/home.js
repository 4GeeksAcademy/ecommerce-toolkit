import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<div id="carouselExample" className="carousel slide" >
					<div class="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
					<img src="https://www.anahuac.mx/mexico/sites/default/files/styles/webp/public/noticias/Los-colores-que-utilizamos-en-la-ropa-dicen-como-somos.jpg.webp?itok=k3GFCGkN" className="d-block w-100 object-fit-cover" style={{heigth:"50px"}} alt="..."/>
					</div>
					<div className="carousel-item">
					<img src="https://static.eldiario.es/clip/a169422c-b292-4c46-9a1d-082f46b9220e_16-9-discover-aspect-ratio_default_0.jpg" className="d-block w-100 object-fit-cover" style={{heigth:"50px"}} alt="..."/>
					</div>
					<div className="carousel-item">
					<img src="https://www.modalia.es/wp-content/uploads/2021/11/scc-2.jpg" className="d-block w-100 object-fit-cover" style={{heigth:"50px"}} alt="..."/>
					</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
			</div>
			<ul class="nav justify-content-center nav-tabs" id="myTab" role="tablist" style={{paddingTop: "30px"}}>
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="popular-tab" data-bs-toggle="tab" data-bs-target="#popular-tab-pane" type="a" role="tab" aria-controls="popular-tab-pane" aria-selected="true">Popular</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="nuevo-tab" data-bs-toggle="tab" data-bs-target="#nuevo-tab-pane" type="a" role="tab" aria-controls="nuevo-tab-pane" aria-selected="false">Nuevo</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="lastU-tab" data-bs-toggle="tab" data-bs-target="#lastU-tab-pane" type="a" role="tab" aria-controls="lastU-tab-pane" aria-selected="false">Ultimas Unidades</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="promo-tab" data-bs-toggle="tab" data-bs-target="#promo-tab-pane" type="a" role="tab" aria-controls="promo-tab-pane" aria-selected="false">Promocion</a>
                </li>
            </ul>

			<div class="tab-content" id="myTabContent">
            	<div class="tab-pane fade show active" id="popular-tab-pane" role="tabpanel" aria-labelledby="popular-tab" tabindex="0">
                	<div class="row" id="popular-tab-pane">	
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
                </div>
            </div>

			<div class="tab-pane fade" id="nuevo-tab-pane" role="tabpanel" aria-labelledby="nuevo-tab" tabindex="0">ESTO ES NUEVO</div>
			<div class="tab-pane fade" id="lastU-tab-pane" role="tabpanel" aria-labelledby="lastU-tab" tabindex="0">Ultimas unidades</div>
			<div class="tab-pane fade" id="promo-tab-pane" role="tabpanel" aria-labelledby="promo-tab" tabindex="0">Promociones</div>
		</div>
	);
};
