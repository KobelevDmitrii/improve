import React from "react";
import '../reset.css';
import '../index.css';
import '../animate.css';

function Footer() {
    return (
        <footer className="footer animated fadeInUp">
            <div className="wrapper">
                <div className="footer__place"> 
                    <img src="../img/position.svg" alt="position"></img>
                    <p className="footer__paragraph">New York Harbor School</p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;