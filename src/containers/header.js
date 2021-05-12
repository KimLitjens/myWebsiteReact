import React, { useState } from 'react';
import Hamburger from '../components/hamburger'

export function HeaderContainer({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <header className={`sticky flex justify-between z-50 top-0 ${open && "bg-accent text-dark w-full h-screen transition translate-x-full "}`}>
            <div className="logo">
                <p>logo</p>
            </div>
            <nav className={`flex ${!open && "hidden"}`}>
                <ul className="navList bg-primary flex flex-col justify-evenly text-5xl text-center">
                    <li className="navItem"><a href="#home" className="navLink" onClick={() => setOpen(!open)}>Home</a></li>
                    <li className="navItem"><a href="#services" className="navLink " onClick={() => setOpen(!open)}>My Services</a></li>
                    <li className="navItem"><a href="#about" className="navLink " onClick={() => setOpen(!open)}>About me</a></li>
                    <li className="navItem"><a href="#work" className="navLink " onClick={() => setOpen(!open)}>My Work</a></li>
                    <li className="navItem"><a href="#contact" className="navLink " onClick={() => setOpen(!open)}>Contact</a></li>
                </ul>
            </nav>
            <div>
                <Hamburger open={open} setOpen={setOpen} />
            </div>
        </header>
    )
}

