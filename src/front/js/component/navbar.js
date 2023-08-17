import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
							<Link className="nav-link" to={"/cart"}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
									<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
								</svg>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-success" to={"/signin"}>Sign In</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-danger" to={"/signout"}>Sign Out</Link>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
};
