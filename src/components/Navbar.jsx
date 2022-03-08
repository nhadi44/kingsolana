import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import pic from '../assets/icons/croped/company-icon.png';
import '../assets/css/page/home.css';

export const Navbar = () => {
	return (
		<div className="component__navbar absolute w-full top-0 z-10">
			<nav className="px-10 py-5">
				<div className="flex items-center justify-between">
					<div className="component__navbar-company-icons">
						<img src={pic} alt="compy-icon" className="w-20 bg-transparent" />
					</div>
					<div className="component__navbar-company-links">
						<NavLink
							to="/"
							className="mx-3 font-semibold text-white text-2xl hover:border-b-4 hover:border-b-white p-3"
						>
							Home
						</NavLink>
						<NavLink
							to="/presale"
							className="mx-3 font-semibold text-white text-2xl hover:border-b-4 hover:border-b-white p-3"
						>
							Presale
						</NavLink>
						<NavLink
							className="mx-3 font-semibold text-white text-2xl hover:border-b-4 hover:border-b-white p-3"
							to="/join-us"
						>
							Join us
						</NavLink>
					</div>
				</div>
			</nav>
		</div>
	);
};
