import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export function FooterContainer({ children }) {
    return (
        <footer id="footer">
            <a href="mailto:myMailAdres@gmail.com" className="footerLink">My mailadres</a>
            <ul className="socialList">
                <li className="socialListItem">
                    <FontAwesomeIcon icon={faGithub} /> Github
                </li>
                <li className="socialListItem flex">
                    <FontAwesomeIcon icon={faLinkedinIn} /> <p className="ml-1">Linked</p><p className="bg-blue-500 text-light relative px-1">In</p>
                </li>
                <li className="socialListItem">Something else</li>
            </ul>
        </footer>

    )
}