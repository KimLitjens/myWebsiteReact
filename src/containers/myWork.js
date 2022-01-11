import React from 'react'
import MyWorkComp from '../components/myWorkComp'


export function MyWork({ children }) {

    return (
        <section
            className="flex justify-center p-16 bg-dark text-accent"
            id="workContainer"
        >
            <div>
                <div className=" text-center">
                    <h2 className="mb-2">
                        My Work
                    </h2>
                    <p className="mb-8 text-white ">
                        A selection of my previous projects and websites
                    </p>
                </div>
                <MyWorkComp
                    fadeInCorner={"topcorner"}
                    projectHref={"https://my-moviesearch-website.netlify.app/"}
                    codeHref={"https://github.com/KimLitjens/moviesearchscrim"}
                    imgSrc="/images/myMovieSearch.png"
                    alt={"my Movie Search Website"}
                    header={"My Movie Search Website"}
                    text={"This is a website I build where you can search for info(inclusive Trailer) about movies and series using the TMDb Api. I used React, Netlify Functions and Tailwind."}
                />

                <MyWorkComp
                    fadeInCorner={"bottomCorner"}
                    projectHref={"https://netflif-scrim.netlify.app/"}
                    codeHref={"https://github.com/KimLitjens/netflix-scrim"}
                    imgSrc="/images/myNetflixClone.png"
                    alt={"myNetflixClone"}
                    header={"My Netflix Clone"}
                    text={"Here I build a Netflix Clone and learned advanced React like styled components, fetching data with API and connecting the app with Google FireBase."}
                />

                <MyWorkComp
                    fadeInCorner={"topcorner"}
                    projectHref={"https://insta-scrim.netlify.app/"}
                    codeHref={"https://github.com/KimLitjens/insta-scrim"}
                    imgSrc="/images/myInstaClone.png"
                    alt={"myInstaClone"}
                    header={"My Instagram Clone"}
                    text={"Here I build a Instagram Clone using React, Tailwind CSS and Google Firebase"}
                />

                <MyWorkComp
                    fadeInCorner={"topcorner"}
                    projectHref={"https://www.producentenorganisatieindelandbouw.nl/"}
                    codeHref={"https://github.com/KimLitjens/POindelandbouw"}
                    imgSrc="/images/producentOrg.png"
                    alt={"productenOrganisaties"}
                    header={"Prod. Org."}
                    text={"This website I build using HTML, Javascript, CSS/Bootstrap. This website is for my mother who did the layout and styling"}
                />
            </div>
        </section>
    )
}

