import React from 'react';
import '../../styles/navbar.css';
import logo from "../../assets/logo.svg";

class NavBar extends React.Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><img src={logo} alt="Logo of Manager"></img></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/source">Source</a></li>
                    <li><button><a href="/dashboard">Dashboard</a></button></li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;