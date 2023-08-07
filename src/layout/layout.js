import React from "react"
import { Link } from "gatsby"

import {
	container,
	wrapper,
	header,
	list,
	active,
	footer,
	copyright,
} from "./layout.module.css"

const Layout = ({ children }) => {

	return (
		<div className={container}>
			<div className={wrapper}>
				<header className={header}>
					<h2>OSP DĄBRÓWKA TUCHOWSKA</h2>
					<nav>
						<ul className={list}>
							<li>
								<Link activeClassName={active} to="/">
									Aktualności
								</Link>
							</li>
							<li>
								<Link activeClassName={active} to="/about">
									O nas
								</Link>
							</li>
							<li>
								<Link activeClassName={active} to="/members">
									Członkowie
								</Link>
							</li>
							<li>
								<Link activeClassName={active} to="/mdp">
									Mdp
								</Link>
							</li>
						</ul>
					</nav>
				</header>
			</div>
			<main>{children}</main>
			<footer className={footer}>
				<div className={copyright}>
					<p>
						© 2023 OSP DĄBRÓWKA TUCHOWSKA. Wszelkie prawa zastrzeżone. Wykonawca
						strony: <a href="#">Jakub Grzybek</a>
					</p>
				</div>
			</footer>
		</div>
	)
}

export default Layout
