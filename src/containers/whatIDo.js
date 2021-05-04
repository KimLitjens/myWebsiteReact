import React from 'react';

export function WhatIDo({ children }) {

    return (
        <section className="myServices bg-dark bg-work1Img bg-cover bg-blend-multiply text-light text-center h-96 " id="services">
            <h2 className="sectionTitle text-accent relative">What I do</h2>
            <div className="services ">
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
            <a href="#work" className="btn bg-accent">My Work</a>
        </section >
    )
}
