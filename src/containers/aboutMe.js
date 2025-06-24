import React from 'react';

export function AboutMeContainer({ children }) {

    return (
        <section
            className="px-8 md:flex justify-self-center mx-auto py-24 max-w-screen-lg"
            id="about"
        >
            <div className="">
                <h1 className="my-4">
                    Who I am
                </h1>
                <p className="text-xl my-4 bg-accent font-secondary md: self-start">
                    Backend developer from the Netherlands
                </p>
                <div className="my-4 pr-4">
                    <p>
                        As a junior backend developer in training, I am currently making a conscious switch from frontend to backend development.
                        After a period in which I immersed myself in HTML, CSS, JavaScript and react, I noticed that my strength lies in structuring systems logically, analysing processes and finding (creative) solutions.
                        Exactly the challenges you find in backend development.
                    </p>
                </div>
            </div>
            <img
                src="/images/kim.jpg"
                alt="kim"
                className="md:min-w-250 "
                id="profilePicAboutMe"
            />
        </section>
    )
}