import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const user = store.user;
	const admin = store.admin;
	console.log(admin);
	const navigate = useNavigate();

	function handleLogout() {
		actions.logout();
		if (user !== null) {
			alert("You have been logged out.");
			navigate("/");
		} else {
			alert("You are not logged in.");
		}
	}

	function handleSignin() {
		if (user === null) {
			navigate("/signin");
		} else {
			alert("You are already logged in.");
		}
	}

	function handleAdmin() {
		if (admin == true) {
			navigate("/admin");
		} else {
			alert("You not logged in as admin.");
		}
	}

	return (
		<nav className="navbar navbar-expand-lg bg-primary-subtle py-3">
			<div className="container-fluid">
				<Link className="navbar-brand ms-3 fw-bold" to={"/"}><i className="fa fa-home" aria-hidden="true" /> VRN </Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">

						<li className="nav-item dropdown">
							<button className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
								Shop By Category
							</button>
							<ul className="dropdown-menu bg-light">
								<li>
									<Link className="dropdown-item" to={"/books"}>Books</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={"/music"}>Music</Link>
								</li>
								<li>
									<Link className="dropdown-item" to={"/toys"}>Toys</Link>
								</li>


							</ul>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to={"/wishlist"}>Wish List</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/aboutUs"}>About Us</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/search"}>Search</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart" aria-hidden="true" /></Link>
						</li>
						<li className="nav-item">
							<button type="button" className="btn btn-success ms-2" onClick={handleSignin}>Sign In</button>
						</li>
						<li className="nav-item">
							<button type="button" className="btn btn-danger ms-2" onClick={handleLogout}>Sign Out</button>
						</li>
						<li className="d-flex align-items-center">
							{user === null ? "" : <i className="fas fa-user-circle fa-2x text-success ms-2"></i>}
						</li>
						<li className="d-flex align-items-center">
							{!admin ? "" : <button type="button" className="btn btn-secondary ms-2" onClick={handleAdmin}>Admin</button>}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
