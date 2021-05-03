import React from 'react';

export function IntroContainer({ children }) {

    return (
        <section className="intro" id="home">
            <h1 className="sectionTitle font-light bg-accent font-secondary">
                Hey, I am <strong className="block">Kim Litjens</strong>
            </h1>
            <p className="sectionSubtitle">front-end dev</p>
            <img
                src="/images/kim.jpg"
                alt="Kim"
            />
        </section>
    )
}





