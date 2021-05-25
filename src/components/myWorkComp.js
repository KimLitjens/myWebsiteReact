import React, { useState } from 'react';
import { useObserve } from "react-observe-component"

export default function MyWorkComp({ fadeInCorner, projectHref, codeHref, imgSrc, alt, header, text }) {
    const [inView, setIsInView] = useState(false)
    const { elementRef } = useObserve({
        isIntersecting: () => setIsInView(true),
        isNotIntersecting: () => setIsInView(false),
        options: {
            threshold: 0.5
        }
    })

    return (
        <div>
            <div className="max-w-3xl my-4 md:flex m-auto" ref={elementRef}>
                <div
                    className={`
                    flex justify-center m-8 
                    ${inView ? 'transform duration-1000 translate-x-0 opacity-1'
                            : fadeInCorner === "topcorner" ? 'transform -translate-x-full -translate-y-full opacity-0'
                                : 'transform -translate-x-full translate-y-full opacity-0'} 
                 md:w-1/2`} >
                    <a href={projectHref} className="m-auto" target="_blank">
                        <img src={imgSrc} alt={alt} className="" />
                    </a>
                </div>
                <div className="flex flex-col justify-center m-8 text-center  md:w-1/2" >
                    <h3 className="mb-4">
                        {header}
                    </h3>
                    <p className="text-light mb-2 md:w-80">
                        {text}
                    </p>
                    <div className="flex justify-center my-8">
                        <button>
                            <a
                                href={projectHref}
                                className="
                            rounded inline-block py-1 px-3 mr-8 bg-accent text-dark cursor-pointer text-xs uppercase tracking-widest font-black
                            transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110
                            "
                                target="_blank"
                            >
                                Website
                        </a>
                        </button>
                        <button>
                            <a
                                href={codeHref}
                                className="
                            rounded inline-block py-1 px-3 bg-accent text-dark cursor-pointer text-xs uppercase tracking-widest font-black
                            transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110
                            "
                                target="_blank"
                            >
                                code
                        </a>
                        </button>
                    </div>
                </div>
            </div>
            <hr className="m-auto w-4/6 border-1 border-accent" />
        </div>
    );
}
