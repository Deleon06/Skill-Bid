import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import "./Card.css";

export default function Card() {
    return (
        <div className="card-container">
            {jobs.map((job) => (
                <div className="job">
                    Job{job.name}
                </div>
            ))}
            {jobs.map((job) => (
                <div className="type">
                    Type{job.jobtype}
                </div>
            ))}
            {jobs.map((job) => (
                <div classname="description">
                    Job Description{job.desription}
                </div>
            ))}
            {jobs.map((job) => (
                <div className="budget">
                    Budget{job.budget}
                </div>
            ))}
        </div>
    )
}
