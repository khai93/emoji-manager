import React from 'react';
import NavBar from './NavBar';
import HomeHero from './HomeHero';

class Header extends React.Component {
    render() {
        return (
            <header>
                <NavBar />
                <HomeHero />
            </header>
        );
    }
}

export default Header;