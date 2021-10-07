import React, {useState, useEffect}  from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import Bid from "../Bid/Bid"
import {getAllJobs, deleteJob, getCategory, getBudget} from "../../services/jobs"
import {Link, useHistory} from 'react-router-dom'

AOS.init();

export default function Card(props) {
    const history = useHistory();    
    const [jobs, setJobs] = useState([])
  const [toggle, setToggle] = useState(false)
  

    useEffect(() => {
        const fetchTasks = async () => {
            if (props.budget === 0 && props.value === "All"){
                let data = await getAllJobs()
                setJobs(data)
            } else if(props.budget !== 0 && props.value === "All"){
                let data = await getBudget(props.budget)
                setJobs(data)
            } else  if(props.budget === 0 && props.value !== "All"){
                let data = await getCategory(props.value)
                setJobs(data)
            } else {
                let data = await getCategory(props.value)
                let filteredData = data.filter(data => data.budget < props.budget)
                setJobs(filteredData)
            }
        }
        fetchTasks();
    },[props]) 
    
  async function handleDelete(e) {
        await deleteJob(e.target.value)
        setToggle(prevState => !prevState)
    }
    
  const handleSubmit = async (e) => {
    console.log(props.user.id)
    console.log(e.target.parentElement.id)
    if (props.user.id === e.target.parentElement.id) {
      if (window.confirm("Are you sure you want to delete the job post?")) { 
      handleDelete(e)
      history.push("/")
      document.location.href = "/"
    }
        }
    }

    return (
        
      <>
        {jobs.map((job) => (
          <div data-aos="zoom-in-up" data-aos-duration="1000" className="card-container"
            id={job.projectType} key={job.name}>
            <Link to={`/post/${job._id}`} key={job._id}> 
            <div className="card-job">
                Name of person: {job.name}
            </div>
            <br />
            <div className="card-type">
                Type of Job: {job.projectType}
            </div>
            <br />
            <div className="card-description">
                Job Description: {job.description}
            </div>
            <br />
            <div className="card-budget">
                Budget: ${ job.budget}
              </div>
              </Link>
            <div className="card-bid">
              <Bid job={job}/>
            </div>
            <div className="button-div" id={job.userId}>
              <button id='editButton'><Link to={`/posts/edit/${job._id}`}>EDIT</Link></button>
                <button value={job._id} onClick={handleSubmit} id='dltButton'>DELETE</button>
            </div>
            </div>
        ))}
        </>
    )
  }


  
