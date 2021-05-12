import React from 'react';

export default function HamburgerAnimated({ open, setOpen }) {

    return (
        <>
            <div className="relative py-3 mx-auto sm:max-w-xl">
                <nav>
                    <button
                        className={`relative w-10 h-10 ${open ? "text-dark" : "text-accent"} rounded-sm focus:outline-none`}
                        onClick={() => setOpen(!open)}>
                        <span className="sr-only">Open main menu</span>
                        <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <span
                                aria-hidden="true"
                                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? "rotate-45" : "-translate-y-1.5"
                                    }`}></span>
                            <span
                                aria-hidden="true"
                                className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${open && "opacity-0"
                                    }`}></span>
                            <span
                                aria-hidden="true"
                                className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${open ? "-rotate-45" : "translate-y-1.5"
                                    }`}></span>
                        </div>
                    </button>
                </nav>
            </div>
        </>
    );
}