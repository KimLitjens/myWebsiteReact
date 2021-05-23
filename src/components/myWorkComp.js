import React, { useState } from 'react';
import { useObserve } from "react-observe-component"

export default function MyWorkComp({ fadeInCorner, href, imgSrc, alt, header }) {
    const [inView, setIsInView] = useState(false)
    const { elementRef } = useObserve({
        isIntersecting: () => setIsInView(true),
        isNotIntersecting: () => setIsInView(false),
        options: {
            threshold: 0.5
        }
    })

    return (
        <div className="flex" ref={elementRef}>
            <div className={`m-8 ${inView ? 'transform duration-1000 translate-x-0 opacity-1'
                : fadeInCorner === "topcorner" ? 'transform -translate-x-full -translate-y-full opacity-0'
                    : 'transform -translate-x-full translate-y-full opacity-0'}`} >
                <a href={href} className="">
                    <img src={imgSrc} alt={alt} className="w-80" />
                </a>
            </div>
            <div className="flex justify-center m-8" >
                <h3 className="">
                    {header}
                </h3>
            </div>
        </div>
    );
}
