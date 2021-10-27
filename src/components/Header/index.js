import { Link } from "react-router-dom";
import React from "react";
import "./style.css"
import logo from "../../assets/img/logo.png"

export const Header = () => {
    return(
        <header className="cabecalho">
            <div className="headerInfo">
                <a href="/home" > <img src={logo} alt="Logo da Linx"></img> </a>   
                <nav className="navigation">
                    <ul>
                        <li>
                            <a href="#">plano de carreira</a>
                        </li>
                        <li>
                            <a href="#">portal de vagas</a>
                        </li>
                        <li>
                            <a href="#">comunidade</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header