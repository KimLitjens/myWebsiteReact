import React from 'react'

export function MyWork({ children }) {
    return (
        <section className="myWork" id="work">
            <h2 className="sectionTitle">
                My Work
            </h2>
            <p className="sectionSubtitle"></p>

            <div className="portfolio">
                <a href="#work" className="portfolioItem">
                    <img src="/images/work1.jpg" alt="" className="portfolio" />
                </a>
                <a href="#work" className="portfolioItem">
                    <img src="/images/work2.jpg" alt="" className="portfolio" />
                </a>
                <a href="#work" className="portfolioItem">
                    <img src="/images/work3.jpg" alt="" className="portfolio" />
                </a>
            </div>
        </section>
    )
}