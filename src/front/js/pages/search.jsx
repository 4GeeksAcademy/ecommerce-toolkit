import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";


export const Search = () => {
	const [items, setItems] = useState([])
	const [costumerWishlist, setCostumerWishlist] = useState([])
	const { store, actions } = useContext(Context);
	const user = store.user;
	const [isloading, setIsLoading] = useState(false)
	const [search, setSearch] = useState("")
	const [searchResult, setSearchResult] = useState("")

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
	
	const handleSearch = (e) => {
		let searchOutput = items.filter((item) => (
			(search && item && item.name && item.name.toLowerCase().includes(search.toLowerCase())) ||
			(search && item && item.category && item.category.toLowerCase().includes(search.toLowerCase()))))
		setSearchResult(searchOutput)
		console.log("result of search", searchResult)

	}

	return (
		<div className="container-fluid text-center py-5 h-screen" >
			{/*search bar*/}			
			<div className="px-lg-5 pt-5 mx-lg-5">
				<h2 className="pb-5">What are you looking for?</h2>
				<div className="input-group rounded px-sm-5 mx-auto w-75">
					<input type="search" className="form-control rounded" placeholder="Search for Title or Category (ex: The Great Gatsby or books)" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
						if(e.key === "Enter")
						{
							handleSearch()
						}
					}}/>
					<button type="submit" className="btn" onClick={(e) => handleSearch()}>
						<i className="fas fa-search"></i>
					</button>
				</div>
			</div>

			{/*items*/}
			{searchResult.length > 0 && searchResult != undefined ? (
				<div className="row px-5 pt-4 mx-lg-5">
					{searchResult.map((item, i) => (
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
					))}
				</div>) : (<>{typeof searchResult == "string" ?
					<></>
					: <h3 className="pt-5 text-center"> Your search didn't match any product. Please try another word.</h3>}</>)
			}

		</div>
	);
};
