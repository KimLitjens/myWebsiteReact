import React from 'react';

export function IntroContainer({ children }) {

    return (
        <section className="intro" id="home">
            <h1 className="sectionTitle">
                Hey, I am <strong>Kim Litjens</strong>
            </h1>
            <p className="sectionSubtitle">front-end dev</p>
            <img
                src="/images/kim.jpg"
                alt="Kim"
                className="h-32"
            />
        </section>
    )
}





