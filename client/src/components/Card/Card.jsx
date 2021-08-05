import React, {useState, useEffect}  from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import Bid from "../Bid/Bid";
import { Link } from "react-router-dom"
import {getAllJobs, deleteJob} from "../../services/jobs"

AOS.init();

export default function Card(props) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete the job post?")) {
      handleDelete(e)
    }
  }


    return (
        
      <>
        {jobs.map((job) => (

          <div data-aos="fade-up" className="card-container" id={job.projectType} key={job._id}>
            <Link to={`/post/${job._id}`} key={job._id}> 
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
              </Link>
            <div className="bid">
              <Bid />
            </div>
            <button id='editButton'><Link to={`/posts/edit/${job._id}`}>EDIT</Link></button>
            <button value={job._id} onClick={handleSubmit} id='dltButton'>DELETE</button>
           
          </div>
        ))}
      </>
    )
  }

