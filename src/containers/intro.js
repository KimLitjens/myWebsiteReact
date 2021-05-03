import React from 'react';

export function IntroContainer({ children }) {

    return (
        <section className="intro relative md:grid grid-cols-2 grid-rows-2 gap-4 min-w-min ml-0 mr-auto" id="home">
            <img
                src="/images/kim.jpg"
                alt="Kim"
                className="md:relative row-span-2 min-w-250 z-2 flex justify-end"
            />
            <h1 className="sectionTitle font-secondary">
                Hey, I am <strong className="inline-block md:block">Kim Litjens</strong>
            </h1>
            <p className="sectionSubtitle bg-accent md:relative w-subIntro text-right self-start">front-end dev</p>

        </section>
    )
}





