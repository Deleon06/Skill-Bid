import React, {useState} from "react";
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
            <div onClick={toggleAbout} className="about"></div>

            {about && (
                <div className="modal">
                    <div onClick={toggleAbout} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Skill<span>Bid</span></h2>
                        <p>
                            A web based application that allows users to list auction a listing and have potential freelancers bid on their project.
                        </p>
                        <button className="close-modal" onClick={toggleAbout}>X</button>
                    </div>
                </div>
            )}
        </>
    )
}