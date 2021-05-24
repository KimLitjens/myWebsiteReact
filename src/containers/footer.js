import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export function FooterContainer({ children }) {
    return (
        <footer className="p-10 bg-dark text-accent" id="footer">

            <ul className="socialList flex inline-blok justify-center">
                <li className="mr-8">
                    <a href="https://github.com/KimLitjens" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </li>
                <li className="">
                    <a href="https://www.linkedin.com/in/kim-litjens/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                </li>
            </ul>
        </footer>

    )
}