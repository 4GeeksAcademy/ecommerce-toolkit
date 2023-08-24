import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const user = store.user;
	return (
		<nav className="navbar navbar-expand-lg bg-primary-subtle">
			<div className="container-fluid">
				<Link className="navbar-brand ms-3" to={"/"}>Home</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to={"/category"}>Shop By Category</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/wishlist"}>Wish List</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/search"}>Search</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/cart"}>Shopping Cart</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-success" to={"/signin"}>Sign In</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-danger" to={"/signout"}>Sign Out</Link>
						</li>
						<li className="d-flex align-items-center">
							{user === null ? "" : <i className="fas fa-user-circle fa-2x text-success"></i>}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
