import React, { useState } from "react";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";
import { header, list, active, menuIcon, nav } from "../layout.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    const [isMobileView, setIsMobileView] = useState(
        document.body.clientWidth <= 640
    );
    const [showNav, setShowNav] = useState(!isMobileView);

    const navIconHandler = () => {
        setShowNav((prevState) => !prevState);
    };

    window.addEventListener("resize", () => {
        setIsMobileView(document.body.clientWidth <= 640);
        setShowNav(document.body.clientWidth > 640);
    });

    return (
        <header className={header}>
            <h2>
                <Link to={"/"}> OSP DĄBRÓWKA TUCHOWSKA </Link>
            </h2>
            <AnimatePresence>
                {showNav && (
                    <motion.nav
                        key="nav"
                        className={nav}
                        initial={
                            isMobileView ? { top: "-150px", opacity: 0 } : {}
                        }
                        animate={
                            isMobileView ? { top: "60px", opacity: 1 } : {}
                        }
                        exit={isMobileView ? { top: "-150px", opacity: 0 } : {}}>
                        <ul className={list}>
                            <motion.li>
                                <Link activeClassName={active} to="/">
                                    Aktualności
                                </Link>
                            </motion.li>
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
                    </motion.nav>
                )}
            </AnimatePresence>
            {isMobileView && (
                <div onClick={navIconHandler}>
                    {showNav && (
                        <StaticImage
                            src="../../../content/assets/close.svg"
                            alt="close nav icon"
                            className={menuIcon}
                        />
                    )}
                    {!showNav && (
                        <StaticImage
                            src="../../../content/assets/menu.svg"
                            alt="menu nav icon"
                            className={menuIcon}
                        />
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
