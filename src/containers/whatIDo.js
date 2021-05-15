import React from 'react';

export function WhatIDo({ children }) {

    return (
        <section className="myServices bg-dark bg-work1Img bg-cover bg-blend-multiply text-light text-center py-16" id="services">
            <h2 className="sectionTitle text-accent relative my-4">What I do</h2>
            <h3 className="my-4">Front-end development</h3>
            <p className="my-4">Creating beautiful and responsive websites and web applications</p>
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
