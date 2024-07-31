import React from "react";
import { footer, copyright, container, contact } from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={footer}>
            <div className={container}>
                <div className={contact}>
                    <h4>Adres</h4>
                    <p>Dąbrówka Tuchowska 145a 33-170 Tuchów</p>
                    <h4>Kontakt</h4>
                    <p>ospdabrowkatuchowska@wp.pl</p>
                </div>
            </div>
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
