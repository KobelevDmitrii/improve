import React from "react";
import '../reset.css';
import '../index.css';
import '../animate.css';
import { Link, Outlet } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <div className="wrapper">
                <div className="header__icon animated fadeInLeft">HackNYU</div>
                <div className="flexColum animated fadeIn">
                    <img src="../img/img3.svg" alt="login_illustration" className="login__img"></img>
                    <div className="cart">
                        <div className="flexColum">
                            <div className="inputBox">
                                <input type="email" placeholder="E-mail" name="E-mail" required className="input" />
                                <hr className="hr" />
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Пароль" name="password" required className="input" />
                                <hr className="hr" />
                            </div>
                            <Link to="/main" className="btnCart">log in</Link>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;