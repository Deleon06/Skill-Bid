import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import "./Card.css";

export default function Card() {
    return (
        <div className="card-container">
            {jobs.map((job) => (
                <div >
                    {job.name}
                </div>
            ))}
            {jobs.map((job) => (
                <div>
                    {job.jobtype}
                </div>
            ))}
            {jobs.map((job) => (
                <div>
                    {job.desription}
                </div>
            ))}
            {jobs.map((job) => (
                <div>
                    {job.budget}
                </div>
            ))}
        </div>
    )
}
