import React from 'react';

export function HeaderContainer({ children }) {
    return (
        <header classname="">
            <div className="logo  ">
                {/* <img src={"/images/kim.jpg"} alt="Kim" className="h-32" /> */}
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav hidden">
                <ul className="navList bg-primary">
                    <li className="navItem"><a href="#home" className="navLink">Home</a></li>
                    <li className="navItem"><a href="#services" className="navLink">My Services</a></li>
                    <li className="navItem"><a href="#about" className="navLink">About me</a></li>
                    <li className="navItem"><a href="#work" className="navLink">My Work</a></li>
                    <li className="navItem"><a href="#contact" className="navLink">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

