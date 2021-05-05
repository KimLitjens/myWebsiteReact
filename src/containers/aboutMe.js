import React from 'react';

export function AboutMeContainer({ children }) {

    return (
        <section className="aboutMe md:grid grid-cols-2 grid-rows-3 gap-4 min-w-min ml-0 mr-auto" id="about">
            <h2 className="sectionTitle">
                Who I am
            </h2>
            <img
                src="/images/kim.jpg"
                alt="kim"
                className="md:relative row-span-3 min-w-250 z-2 flex justify-end"
            />
            <p className="text-xl bg-accent font-secondary md: self-start">front-end dev from the Netherlands</p>
            <div className="aboutMeBody ">
                <p>I am looking for a challenging job as a front-end developer at a company where I can show my programming talents and develop myself even more.</p>
                <p>some other texxt</p>
            </div>
        </section>
    )
}