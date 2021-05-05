import React from 'react';

export function WhatIDo({ children }) {

    return (
        <section className="myServices bg-dark bg-work1Img bg-cover bg-blend-multiply text-light text-center py-4" id="services">
            <h2 className="sectionTitle text-accent relative">What I do</h2>
            <div className="services my-4 md:flex max-w-full mr-auto ">
                <div className="service" >
                    <h3>Design + Development</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="service">
                    <h3>E-Commerce</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="service">
                    <h3>WordPress</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <a
                href="#work"
                className="
                btn inline-block py-2 px-6 bg-accent text-dark cursor-pointer text-sm uppercase tracking-widest font-black
                transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110
                "
            >
                My Work
            </a>
        </section >
    )
}
