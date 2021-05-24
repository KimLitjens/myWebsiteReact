import React from 'react';

export function IntroContainer({ children }) {

    return (
        <section
            className="px-8 md:flex justify-center py-24 mb-12"
            id="home"
        >
            <img
                src="/images/kim.jpg"
                alt="Kim"
                className="md:relative min-w-250 z-2 mx-4"
                id="profilePic"
            />
            <div className="flex-col justify-between">
                <h1 className="font-secondary mb-4 px-4">
                    Hey, I am <br />
                    <strong> Kim Litjens</strong>
                </h1>
                <p
                    className="bg-accent text-xl pr-4 md:relative text-right self-start"
                >
                    front-end dev
                </p>
            </div>
        </section>
    )
}





