import React from 'react'

export default function Detail() {
    return (
        <div className="detail-container">
        {jobs.map((job) => (
            <div>
            <h1>{job.name}</h1>
            <h2>{job.jobtype}</h2>
            <p>{job.description}</p>
            <h2>{job.budget}</h2>
            </div>
            ))}
        </div>
    )
}
