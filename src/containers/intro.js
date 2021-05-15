import React from 'react';

export function IntroContainer({ children }) {



    return (
        <section className="intro relative md:flex min-w-min py-16" id="home">
            <img
                src="/images/kim.jpg"
                alt="Kim"
                className="object-bottom md:relative min-w-250 z-2  "
            />
            <div className="flex-col justify-between px-4">
                <h1 className="font-secondary mb-4">
                    Hey, I am <strong className="inline-block md:block">Kim Litjens</strong>
                </h1>
                <p className="text-xl bg-accent md:relative text-right self-start">front-end dev</p>
            </div>
        </section>
    )
}





