import React from "react";
import { footer, copyright } from "../layout.module.css";

const Footer = () => {
    return (
        <footer className={footer}>
            <div className={copyright}>
                <p>
                    © 2023 OSP DĄBRÓWKA TUCHOWSKA. Wszelkie prawa zastrzeżone.
                    Wykonawca strony: <a href="#">Jakub Grzybek</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
