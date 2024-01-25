import React from "react";
import { Link } from "gatsby";

import {
    container,
    wrapper,
    header,
    list,
    active,
    footer,
    copyright,
    menuIcon,
} from "./layout.module.css";

const Layout = ({ children }) => {
    return (
        <div className={container}>
            <div className={wrapper}>
                <header className={header}>
                    <h2>
                        <Link to={"/"}> OSP DĄBRÓWKA TUCHOWSKA </Link>
                    </h2>
                    <nav>
                        <ul className={list}>
                            <li>
                                <Link activeClassName={active} to="/">
                                    Aktualności
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName={active} to="/o-nas">
                                    O nas
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName={active} to="/czlonkowie">
                                    Członkowie
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName={active} to="/mdp">
                                    MDP
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <svg
                        className={menuIcon}
                        data-name="Layer 3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        viewBox="0 0 128 128"
                    >
                        <path d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 61.889H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 87.7H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z" />
                    </svg>
                </header>
            </div>
            <main>{children}</main>
            <footer className={footer}>
                <div className={copyright}>
                    <p>
                        © 2023 OSP DĄBRÓWKA TUCHOWSKA. Wszelkie prawa
                        zastrzeżone. Wykonawca strony:{" "}
                        <a href="#">Jakub Grzybek</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
