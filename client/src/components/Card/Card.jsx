import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import {getAllJobs} from "../../services/jobs"
import {useState, useEffect} from "react"

AOS.init();

export default function Card() {
    const[jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            let data = await getAllJobs()
            setJobs(data)
        }
        fetchTasks()
    }, [])

    // const displayEditLink = (job) => {
    //     if (job.userId === props.user?.id) {
    //         return <Link to={`/edit-job/${job._id}`}>Edit</Link>
    //     }
    // }
    return (
        <>
        {jobs.map((job) => (
            <div data-aos="fade-up" className="card-container" key={job._id}>
                <div className="job">
                    Name of person: {job.name}
                </div>
                <br />
                <div className="type">
                    Type of Job: {job.projectType}
                </div> 
                <br />
                <div className="description">
                    Job Description: {job.description}
                </div>
                <br />
                <div className="budget">
                    Budget: {job.budget}
                </div>
            </div>
        ))}
        </>
    )
}
