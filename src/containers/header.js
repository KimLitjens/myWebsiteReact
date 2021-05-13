import React, { useState } from 'react';
import Hamburger from '../components/hamburger'

export function HeaderContainer({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="">
            <div className="fixed z-50 top-0 left-0">
                <p>logo</p>
            </div>
            <div className="fixed z-50 top-0 right-0">
                <Hamburger open={open} setOpen={setOpen} />
            </div>
            <nav className={`fixed z-40 bg-accent text-dark w-full ${open ? "transform duration-500 translate-x-0" : "transform duration-500 translate-x-full"}`}>
                <ul className="navList h-screen flex flex-col justify-evenly text-5xl text-center">
                    <li className="navItem"><a href="#home" className="navLink hover:text-light" onClick={() => setOpen(!open)}>Home</a></li>
                    <li className="navItem"><a href="#services" className="navLink hover:text-light" onClick={() => setOpen(!open)}>My Services</a></li>
                    <li className="navItem"><a href="#about" className="navLink hover:text-light" onClick={() => setOpen(!open)}>About me</a></li>
                    <li className="navItem"><a href="#work" className="navLink hover:text-light" onClick={() => setOpen(!open)}>My Work</a></li>
                    <li className="navItem"><a href="#contact" className="navLink hover:text-light" onClick={() => setOpen(!open)}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

