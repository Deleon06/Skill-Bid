import React, {useState, useEffect}  from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import {getAllJobs, deleteJob, getCategory} from "../../services/jobs"
import {Link} from 'react-router-dom'

AOS.init();

export default function Card(props) {
    const [jobs, setJobs] = useState([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const fetchTasks = async () => {
            console.log(props.value)
            if (props.value === undefined || props.value.projectType === "All"){
                let data = await getAllJobs()
                setJobs(data)
            }
            else  {
                let data = await getCategory(props.value.projectType)
                setJobs(data)
            }
        }

        fetchTasks();   
    },[props]) 
    
 

        async function handleDelete(e) {
            await deleteJob(e.target.value)
            setToggle(prevState => !prevState)
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
            <button id='editButton'><Link to={`/posts/edit/${job._id}`}>EDIT</Link></button>
            <button value={job._id} onClick={handleDelete} id='dltButton'>DELETE</button>
           
          </div>
        ))}
      </>
    )
  }

