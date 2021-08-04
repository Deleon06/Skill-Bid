import React, {useState, useEffect}  from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {getAllJobs, deleteJob} from "../../services/jobs"

AOS.init();

export default function Card() {
  const [jobs, setJobs] = useState([])
  const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const fetchTasks = async () => {
            let data = await getAllJobs()
            setJobs(data)
        }
        fetchTasks()
    }, [toggle])
  
  async function handleDelete(e) {
    await deleteJob(e.target.value)
    setToggle(prevState => !prevState)
  }

    // const displayEditLink = (job) => {
    //     if (job.userId === props.user?.id) {
    //         return <Link to={`/edit-job/${job._id}`}>Edit</Link>
    //     }
    // }
    return (
        
        <>
        {jobs.map((job) => (
          <Link to={`/post/${job._id}`} key={job._id}>             
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
            <button value={job._id} onClick={handleDelete} id='dltButton'>DELETE</button>
            </div>
          </Link>
        ))}
        </>
    )
}
