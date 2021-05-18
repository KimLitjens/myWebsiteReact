import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export function FooterContainer({ children }) {
    return (
        <footer className="p-10 bg-dark text-accent" id="footer">

            <ul className="socialList flex inline-blok justify-between">
                <li className="socialListItem">
                    <a href="mailto:myMailAdres@gmail.com" className="footerLink">My mailadres</a>
                </li>
                <li className="socialListItem">
                    <FontAwesomeIcon icon={faGithub} /> Github
                </li>
                <li className="socialListItem flex">
                    <FontAwesomeIcon icon={faLinkedinIn} /> <p className="ml-1">Linkedin</p>
                </li>
                {/* <li className="socialListItem">Something else</li> */}
            </ul>
        </footer>

    )
}