import React from 'react'
import MyWorkComp from '../components/myWorkComp'


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
                <MyWorkComp
                    fadeInCorner={"topcorner"}
                    href={"https://insta-scrim.netlify.app/"}
                    imgSrc="/images/myInstaClone.png"
                    alt={"myInstaClone"}
                    header={"My Instagram Clone"}
                />

                <MyWorkComp
                    fadeInCorner={"bottomCorner"}
                    href={"https://netflif-scrim.netlify.app/"}
                    imgSrc="/images/myNetflixClone.png"
                    alt={"myNetflixClone"}
                    header={"My Netflix Clone"}
                />

                <MyWorkComp
                    fadeInCorner={"topcorner"}
                    href={"https://www.producentenorganisatieindelandbouw.nl/"}
                    imgSrc="/images/producentOrg.png"
                    alt={"productenOrganisaties"}
                    header={"ProducentenOrganisaties"}
                />

            </div >

        </section >
    )
}

