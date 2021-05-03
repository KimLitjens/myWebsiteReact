import React from 'react';

export function AboutMeContainer({ children }) {

    return (
        <section className="aboutMe" id="about">
            <h2 className="sectionTitle">
                Who I am
            </h2>
            <p className="sectionSubtitle bg-accent font-secondary">I am looking for a challenging job as a front-end developer at a company where I can show my programming talents and develop myself even more.</p>

            <div className="aboutMeBody">
                <p></p>
                <p></p>
            </div>

            <img src="/images/kim.jpg" alt="kim" />
        </section>
    )
}