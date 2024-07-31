import React from "react";
import { motion } from "framer-motion";
import { container, wrapper, main } from "./layout.module.css";
import Footer from "./footer/footer";
import Header from "./header/header";

const Layout = ({ children }) => {
    return (
        <div className={container}>
            <div className={wrapper}>
                <Header />
            </div>
            <motion.main className={main} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default Layout;
