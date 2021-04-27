import React from 'react'

export function FooterContainer({ children }) {
    return (
        <footer id="footer">
            <a href="mailto:myMailAdres@gmail.com" className="footerLink">My mailadres</a>
            <ul className="socialList">
                <li className="socialListItem">Github</li>
                <li className="socialListItem">LinkedIn</li>
                <li className="socialListItem">Something else</li>
            </ul>
        </footer>

    )
}