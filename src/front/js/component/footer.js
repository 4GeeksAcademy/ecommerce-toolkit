import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (

	<div className="container-fluid border-top pt-1" id="footer">
		<div className="row align-items-center m-2">
			<div className="col">
				<h6 className="fw-bold">FIND US ON</h6>
				<div className="d-flex flex-row my-3">
					<div className="me-3">
						<a href="https://www.instagram.com/" className="link-dark link-offset-2 link-underline-opacity-0">
							<i className="fa-brands fa-instagram fa-lg"></i>
						</a>
					</div>
					<div className="me-3">
						<a href="https://m.facebook.com/login/" className="link-dark link-offset-2 link-underline-opacity-0">
							<i className="fa-brands fa-facebook-f fa-lg"></i>
						</a>
					</div>
					<div className="me-3">
						<a href="https://www.pinterest.com/" className="link-dark link-offset-2 link-underline-opacity-0">
							<i className="fa-brands fa-pinterest fa-lg"></i>
						</a>
					</div>
					<div className="me-3">
						<a href="https://www.tiktok.com/" className="link-dark link-offset-2 link-underline-opacity-0">
							<i className="fa-brands fa-tiktok fa-lg"></i>
						</a>
					</div>
				</div>
				<div>
					<p className="text-secondary fs-6 text">
						©2023 VRN | <i className="fa fa-envelope" aria-hidden="true"></i> support@vrn.com
					</p>
				</div>
			</div>
			<div className="col">
				<div className="row">

					<div className="col">
						<div>

						</div>
						<div>
							<Link className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to={"/"}>Home</Link>
						</div>
						<div>
							<Link className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to={"/aboutus"}>About us</Link>
						</div>
						<div>
							<Link className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to={"/sales"}>Sales</Link>
						</div>

					</div>


					<div className="col">
						<div>
							<Link className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to={"/books"}>Books</Link>
						</div>
						<div>
							<Link className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to={"/music"}>Music</Link>
						</div>
						<div>
							<Link className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to={"/toys"}>Toys</Link>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
);
