import React, { useState } from 'react';
import Hamburger from '../components/hamburger'

export function HeaderContainer({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="">
            {/* <div className="fixed z-50 p-3 top-0 left-0 text-accent text-center">
                <p>Kim <br /> Litjens</p>
            </div> */}
            <div className="fixed z-50 top-0 right-0">
                <Hamburger open={open} setOpen={setOpen} />
            </div>
            <nav
                className={`fixed z-40 bg-accent text-dark w-full 
                            ${open ? "transform duration-500 translate-x-0"
                        : "transform duration-500 translate-x-full"}`}
            >
                <ul className="h-screen flex flex-col justify-evenly text-5xl text-center">
                    <li className="">
                        <a href="#home"
                            className="hover:text-light"
                            onClick={() => setOpen(!open)}
                        >
                            Home
                        </a>
                    </li>
                    <li className="">
                        <a href="#services"
                            className="hover:text-light"
                            onClick={() => setOpen(!open)}
                        >
                            My Services
                    </a>
                    </li>
                    <li className="">
                        <a href="#about"
                            className="hover:text-light"
                            onClick={() => setOpen(!open)}
                        >
                            About me
                        </a>
                    </li>
                    <li className="">
                        <a href="#work"
                            className="hover:text-light"
                            onClick={() => setOpen(!open)}
                        >
                            My Work
                        </a>
                    </li>
                    <li className="">
                        <a href="#contact"
                            className="hover:text-light"
                            onClick={() => setOpen(!open)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

