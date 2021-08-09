import React, {useState} from "react";
import "aos/dist/aos.css";
import "./Modal.css";

export default function About() {
    const [about, setAbout] = useState(false);

    const toggleAbout = () => {
        setAbout(!about);
    };

    if(about){
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

    return (
        <>
            <div onClick={toggleAbout} className="about">About</div>

            {about && (
                <div data-aos="fade-up" data-aos-duration="1000" className="modal">
                    <div onClick={toggleAbout} className="overlay"></div>
                    <div className="modal-content">
                        <h2 className="title">Skill<span>Bid</span></h2>
                        <p>
                            Skill-Bid is a web based application that allows users to list auction a listing and have potential freelancers bid on their project.
                        </p>
                        <button className="close-modal" onClick={toggleAbout}>X</button>
                    </div>
                </div>
            )}
        </>
    )
}