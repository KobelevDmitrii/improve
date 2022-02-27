import React from "react";
import '../reset.css';
import '../index.css';
import '../animate.css';

function Header() {
    return (
        <header className="header animated fadeInDown">
            <div className="header__icon">HackNYU</div>
            <div>
                <p className="header__user__name">Teacher: Doris Wilson</p>
                <img src="../img/liquid_form.svg" alt="position"></img>
            </div>
        </header>
    );
}

export default Header;