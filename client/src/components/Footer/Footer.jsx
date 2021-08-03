import React from 'react'
import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FaGitHub, FaLinkedin} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="footer">
            <h1 className="footer-h1">Skill<span>Bid</span></h1>
            <h5 className="created">Created By:</h5>
            <p>Ryan Lee</p> 
            <a rel="noreferrer" href="https://github.com/AleksandrGorbach" target="_blank">
            <FontAwesomeIcon icon={FaGitHub} id="git" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/aleksandr-gorbach-85a314154/" target="_blank">
            <FontAwesomeIcon icon={FaLinkedin} id="link" />
            </a>
            <p>Cameron Izadi</p> 
            <a rel="noreferrer" href="https://github.com/AleksandrGorbach" target="_blank">
            <FontAwesomeIcon icon={FaGitHub} id="git" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/aleksandr-gorbach-85a314154/" target="_blank">
            <FontAwesomeIcon icon={FaLinkedin} id="link" />
            </a>
            <p>Gabriel Deleon</p> 
            <a rel="noreferrer" href="https://github.com/AleksandrGorbach" target="_blank">
            <FontAwesomeIcon icon={FaGitHub} id="git" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/aleksandr-gorbach-85a314154/" target="_blank">
            <FontAwesomeIcon icon={FaLinkedin} id="link" />
            </a>
            <p>Aleksandr Gorbach</p> 
            <a rel="noreferrer" href="https://github.com/AleksandrGorbach" target="_blank">
            <FontAwesomeIcon icon={FaGitHub} id="git" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/aleksandr-gorbach-85a314154/" target="_blank">
            <FontAwesomeIcon icon={FaLinkedin} id="link" />
            </a>
        </div>
    )
}
