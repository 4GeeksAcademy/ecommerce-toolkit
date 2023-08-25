import React from "react";
import { Link } from "react-router-dom";

export const Carousel = () => {
	return(
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
	);
};


