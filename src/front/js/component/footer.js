import React, { Component } from "react";

export const Footer = () => (

	<div class="container">


		<div class="row align-items-center m-2">
			<div class="col">
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
					<p class="text-secondary fs-6 text">
						©2023 VRN | <i class="fa fa-envelope" aria-hidden="true"></i> support@vrn.com
					</p>
				</div>
			</div>
			<div class="col">
				<div class="col">
					<p>Home</p>
				</div>
				<div class="col"></div>
				<div class="col"></div>
				
			</div>
		</div>


	</div>
);
