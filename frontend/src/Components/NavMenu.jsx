import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import { menuItems } from "../Utils/menu-items";
import { GoSignOut } from "react-icons/go";

const NavMenu = ({ active, setActive, switchViews }) => {

	return (
		<div className="container-fluid vh-100 bg-light">
			<div className="row vh-100">
				<div className="col-12 col-md-4 col-lg-3 d-flex flex-column p-4">
					<div className="d-flex align-items-center mb-4">
						<img
							src={avatar}
							alt="avatar of the user"
							className="img-fluid rounded-circle me-3"
						/>
						<div className="text">
							<h2>Alex</h2>
							<p>Money available</p>
						</div>
					</div>
					<ul className="list-unstyled flex-grow-1">
						{menuItems.map((item) => {
							const { id, title, icon, link } = item;
							return (
								<li
									style={{ cursor: "pointer" }}
									key={id}
									className={`mb-3 ${active === id ? 'active' : ''}`}
									onClick={() => setActive(id)}
								>
									{icon} <span>{title}</span>
								</li>
							);
						})}
					</ul>
					<div className="bottom mt-auto">
						<GoSignOut />
						<span>Sign Out</span>
					</div>
				</div>
				<div className="col-12 col-md-9 bg-white">
					{switchViews()}
				</div>
			</div>
		</div>
	);
};


export default NavMenu;
