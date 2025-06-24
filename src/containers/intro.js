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
                    Junior Backend Developer | Python
                </p>
                <p className="text-secondAccent text-center">
                    {/* Currently available for hire. I'm looking for a front-end job in React. <br /> Should you have any questions do not hesitate to contact me by filling out the <br />  */}
                    <a
                        href="#contact"
                        className="
                        rounded inline-block mt-4 py-2 px-6 bg-secondAccent 
                        text-light cursor-pointer text-sm uppercase tracking-widest font-black
                        transition duration-200 ease-in-out 
                        transform hover:-translate-y-1 hover:scale-110
                        "

                    >
                        contact form
                    </a>
                </p>
            </div>
        </section>
    )
}





