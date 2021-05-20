import React, { useState } from 'react';
import { useObserve } from "react-observe-component"

export function WhatIDo({ children }) {
    const [inView, setIsInView] = useState(false)

    const { elementRef } = useObserve({
        isIntersecting: () => setIsInView(true),
        isNotIntersecting: () => setIsInView(false),
        options: {
            threshold: 0.5
        }
    })

    return (
        <section className="myServices bg-dark bg-work1Img bg-cover bg-blend-multiply text-light text-center py-16" id="services">
            <h2 className="sectionTitle text-accent relative my-4">What I do</h2>
            <div className={`js-show-on-scroll transform duration-1000 ${inView ? 'scale-1' : 'scale-0'}`} ref={elementRef}>
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
