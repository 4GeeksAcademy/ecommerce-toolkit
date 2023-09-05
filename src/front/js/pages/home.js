import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const [items, setItems] = useState([])
	const [costumerWishlist, setCostumerWishlist] = useState([])
	const { store, actions } = useContext(Context);
	const user = store.user;
	const [isloading, setIsLoading] = useState(false)


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
				setItems(data)
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
			costumerWishlist.map((item) => {
				if (id == item.item_id) {
					heartclass = "fa-solid fa-heart fa-lg"
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

	const comparablePrice = items.map(item => {
		if (item.sale_price === null) {
			return {
				...item,
				finalPrice: item.price
			}
		} else {
			return {
				...item,
				finalPrice: item.sale_price
			}
		}
	})


	return (
		<div className="container-fluid text-center pb-5 px-0 mx-0">
			{/*Carousel */}
			<div id="carouselCaptions" className="carousel carousel-dark slide" data-bs-ride="true">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" className="d-block w-100" alt="books"/>
							<div className="carousel-caption d-none d-md-block">
								<h3>Books that speak to your soul</h3>	
								<Link to={"/books"} >
									<button className="btn btn-outline-dark">Shop Books</button>	
								</Link>							
							</div>
					</div>
					<div className="carousel-item">
						<img src="https://images.unsplash.com/photo-1600723367429-aea889fdad45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="toys"/>
							<div className="carousel-caption d-none d-md-block">
								<h3>Sometimes music is your best companion</h3>	
								<Link to={"/music"} >
									<button className="btn btn-outline-dark">Shop Music </button>		
								</Link>					
							</div>
					</div>
					<div className="carousel-item">
						<img src="https://images.unsplash.com/photo-1598348341635-33a3f4205d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80 " className="d-block w-100" alt="..."/>
							<div className="carousel-caption d-none d-md-block">
								<h3>Play all day long</h3>	
								<Link to={"/toys"} >
									<button className="btn btn-outline-dark">Shop Toys</button>	
								</Link>							
							</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			{/*items*/}
			{!isloading ? (
				<div className="row px-5 pt-4 mx-lg-5">
					{(items.length > 0 && items != undefined) ? (
						items.map((item, i) => (
							<div className="col-md-4 col-lg-3 g-4 pb-3 " key={i}>
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
												<h6 className="text-primary text-opacity-50 fw-bolder">$ {item.price}</h6>
												: <h6 className="text-primary text-opacity-50 fw-bolder">
													<span className="text-body-tertiary text-decoration-line-through pe-2 fw-normal">$ {item.price}</span>${item.sale_price}
												</h6>}
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
						))) : <h2 className="pt-5 text-center"> We don't have these products in stock</h2>}
				</div>) : (<div className="pt-5 d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>)
			}

			<div className="row row-cols-1 row-cols-md-2 g-2" style={{ padding: "15px" }}>
				<div className="col"></div>
				<div className="col border border-secondary rounded bg-body-tertiary">
					<h5 className="mt-2">Suggestions</h5>
					<div className="mb-3 d-inline-flex p-2 text-center">
						<label for="exampleFormControlInput1" className="form-label mt-3 mx-2">Name</label>
						<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" style={{ width: "10rem", margin: "8px" }} />
						<label for="exampleFormControlInput1" className="form-label">Last Name</label>
						<input type="text" className="form-control m-2" id="exampleFormControlInput1" placeholder="Last Name" style={{ width: "10rem" }} />
					</div>
					<div className="mb-3">
						<label for="exampleFormControlInput1" className="form-label">Email address</label>
						<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
					</div>
					<div className="mb-3">
						<label for="exampleFormControlTextarea1" className="form-label">Comments</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
					</div>
					<input type="submit" className="btn btn-success m-2" value="Submit" />
				</div>
			</div>
		</div>
	);
};
