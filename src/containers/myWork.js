import React from 'react'

export function MyWork({ children }) {
    return (
        <section className="flex justify-center bg-dark bg-work2Img bg-cover bg-blend-multiply text-accent" id="work">
            <div>
                <div className=" m-8 text-center">
                    <h2 className="text-white mb-4">
                        My Work
                </h2>
                    <p className="">A selection of my previous projects and websites</p>
                </div>
                <div className="flex">
                    <div className="m-8">
                        <a href="https://insta-scrim.netlify.app/" className="">
                            <img src="/images/myInstaClone.png" alt="myInstaClone" className="w-80" />
                        </a>
                    </div>
                    <div className="flex justify-center m-8">
                        <h3 className="">
                            My Instagram Clone
                    </h3>
                    </div>
                </div>
                <div className="flex">
                    <div className="m-8">
                        <a href="https://netflif-scrim.netlify.app/" className="">
                            <img src="/images/myNetflixClone.png" alt="myNetflixClone" className="w-80" />
                        </a>
                    </div>
                    <div className="flex justify-center m-8">
                        <h3 className="">
                            My Netflix Clone
                    </h3>
                    </div>
                </div>

            </div>

        </section>
    )
}