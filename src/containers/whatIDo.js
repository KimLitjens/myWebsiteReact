import React from 'react';

export function WhatIDo({ children }) {
    const callback = function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("scale-0")
            } else {
                entry.target.classList.add("scale-0");
            }
        });
    };

    const observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
        // target.classList.add("opacity-0");
        observer.observe(target);
    });


    return (
        <section className="myServices bg-dark bg-work1Img bg-cover bg-blend-multiply text-light text-center py-16" id="services">
            <h2 className="sectionTitle text-accent relative my-4">What I do</h2>
            <div className="js-show-on-scroll transform duration-1000 scale-0">
                <h3 className="my-4">Front-end development</h3>
                <p className="my-4">Creating beautiful and responsive websites and web applications</p>
                <a
                    href="#work"
                    className="
                    rounded inline-block py-2 px-6 bg-accent text-dark cursor-pointer text-sm uppercase tracking-widest font-black
                    transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110
                    "
                >
                    My Work
            </a>
            </div>

        </section >
    )
}
