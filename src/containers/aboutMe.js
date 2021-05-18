import React from 'react';

export function AboutMeContainer({ children }) {

    return (
        <section className="mx-8 md: md:flex justify-center py-24 min-w-min" id="about">
            <div className="">
                <h1 className="my-4">
                    Who I am
            </h1>

                <p className="text-xl my-4 bg-accent font-secondary md: self-start">front-end dev from the Netherlands</p>
                <div className="my-4">
                    <p>I am looking for a challenging job as a front-end developer at a company where I can show my programming talents and develop myself even more.</p>
                </div>
            </div>
            <img
                src="/images/kim.jpg"
                alt="kim"
                className="md:min-w-250 z-2 "
            />
        </section>
    )
}