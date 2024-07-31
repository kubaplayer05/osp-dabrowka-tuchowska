import React, { useState } from "react";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import {
    header,
    list,
    active,
    menuIcon,
    nav,
    fixed,
    headerContainer,
} from "./header.module.css";

const Header = () => {
    const [headerConfig, setHeaderConfig] = useState({
        isMobileView: document.body.clientWidth <= 640,
        showNav: document.body.clientWidth > 640,
        showFixedHeader: false,
    });

    const navIconHandler = () => {
        setHeaderConfig((prevState) => {
            return {
                ...prevState,
                showNav: !prevState.showNav,
            };
        });
    };

    window.addEventListener("resize", () => {
        setHeaderConfig((prevState) => {
            return {
                ...prevState,
                isMobileView: document.body.clientWidth <= 640,
                showNav: document.body.clientWidth > 640,
            };
        });
    });

    document.addEventListener("scroll", () => {
        const scrollPos = window.scrollY;
        setHeaderConfig((prevState) => {
            return {
                ...prevState,
                showFixedHeader: scrollPos > 600,
            };
        });
    });

    return (
        <motion.header
            initial={headerConfig.showFixedHeader ? { opacity: 0 } : {}}
            animate={headerConfig.showFixedHeader ? { opacity: 1 } : {}}
            className={`${header} ${headerConfig.showFixedHeader ? fixed : ""}`}
        >
            <div className={headerContainer}>
                <h2>
                    <Link to={"/"}> OSP DĄBRÓWKA TUCHOWSKA </Link>
                </h2>
                <AnimatePresence>
                    {headerConfig.showNav && (
                        <motion.nav
                            key="nav"
                            className={nav}
                            initial={
                                headerConfig.isMobileView
                                    ? { top: "-150px", opacity: 0 }
                                    : {}
                            }
                            animate={
                                headerConfig.isMobileView
                                    ? { top: "60px", opacity: 1 }
                                    : {}
                            }
                            exit={
                                headerConfig.isMobileView
                                    ? { top: "-150px", opacity: 0 }
                                    : {}
                            }
                        >
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
                                    <Link
                                        activeClassName={active}
                                        to="/czlonkowie"
                                    >
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
                {headerConfig.isMobileView && (
                    <div onClick={navIconHandler}>
                        {headerConfig.showNav && (
                            <StaticImage
                                src="../../../content/assets/close.svg"
                                alt="close nav icon"
                                className={menuIcon}
                            />
                        )}
                        {!headerConfig.showNav && (
                            <StaticImage
                                src="../../../content/assets/menu.svg"
                                alt="menu nav icon"
                                className={menuIcon}
                            />
                        )}
                    </div>
                )}
            </div>
        </motion.header>
    );
};

export default Header;
