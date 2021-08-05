import React, {useState, useEffect}  from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
<<<<<<< HEAD
import { Link } from "react-router-dom"
import {getAllJobs, deleteJob} from "../../services/jobs"
=======
import {getAllJobs, deleteJob, getBathroom, getElectrical, getFloor, getKitchen, getLandscape, getPlumbing, getRoof, getWall, getCeiling, getPaint} from "../../services/jobs"
>>>>>>> ec2d9a6 (adding filter)

AOS.init();

export default function Card(props) {
<<<<<<< HEAD
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

=======
    const [jobs, setJobs] = useState([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const fetchTasks = async () => {
            if (props.value === "Bathroom") {
                let data = await getBathroom()
                setJobs(data.project)
            }else if(props.value === "Ceiling"){
                let data = await getCeiling()
                setJobs(data)
            }else if(props.value === "Electrical") {
                let data = await getElectrical()
                setJobs(data)
            }else if(props.value === "Floor"){
                let data = await getFloor()
                setJobs(data)
            }else if(props.value === "Kitchen"){
                let data = await getKitchen()
                setJobs(data)
            }else if(props === "Landscape"){
                let data = await getLandscape()
                setJobs(data)
            }else if(props.value === "Paint") {
                let data = await getPaint()
                setJobs(data)
            }else if(props.value === "Plumbing"){
                let data = await getPlumbing()
                setJobs(data)
            }else if(props.value === "Roof"){
                let data = await getRoof()
                setJobs(data)
            }else if(props.value === "Wall"){
                let data = await getWall()
                setJobs(data)
            }else{
            let data = await getAllJobs()
            console.log(data)
            setJobs(data)
            console.log(props.value)
        }
    }
             fetchTasks();    
    
        },[])

        async function handleDelete(e) {
            await deleteJob(e.target.value)
            setToggle(prevState => !prevState)
        }
>>>>>>> ec2d9a6 (adding filter)

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

