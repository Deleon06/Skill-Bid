import React, {useState, useEffect}  from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
<<<<<<< HEAD
import {getAllJobs, getBathroom, getElectrical, getFloor, getKitchen, getLandscape, getPlumbing, getRoof, getWall, getCeiling, getPaint} from "../../services/jobs"
import {useState, useEffect} from "react"

AOS.init();

export default function Card(props) {
    const[jobs, setJobs] = useState([])
=======
import {getAllJobs, deleteJob} from "../../services/jobs"

AOS.init();

export default function Card() {
  const [jobs, setJobs] = useState([])
  const [toggle, setToggle] = useState(false)
>>>>>>> 3fe700a7e1b53b4216f8c40449ee411e7a489f1a

    useEffect(() => {
        const fetchTasks = async () => {
            let data = await getAllJobs()
            setJobs(data)
        }
<<<<<<< HEAD
        fetchTasks();
    
    
        if (props.value === "Bathroom") {
            const fetchTasks = async () => {
                let data = await getBathroom()
                setJobs(data)
            }
            fetchTasks();
        }

        if (props.value === "Ceiling") {
            const fetchTasks = async () => {
                let data = await getCeiling()
                setJobs(data)
            }
            fetchTasks();
        }

        if (props === "Electrical") {
            const fetchTasks = async () => {
                let data = await getElectrical()
                setJobs(data)
            }
            fetchTasks();
        }

        if (props === "Floor") {
            const fetchTasks = async () => {
                let data = await getFloor()
                setJobs(data)
            }
            fetchTasks();
        }

        if (props === "Kitchen") {
            const fetchTasks = async () => {
                let data = await getKitchen()
                setJobs(data)
            }
            fetchTasks();
        }

        if (props === "Landscape") {
            const fetchTasks = async () => {
                let data = await getLandscape()
                setJobs(data)
            }
            fetchTasks();
        }

        if (props === "Paint") {
            const fetchTasks = async () => {
                let data = await getPaint()
                setJobs(data)
            }
            fetchTasks();
        }

        if (props === "Plumbing") {
            const fetchTasks = async () => {
                let data = await getPlumbing()
                setJobs(data)
            }
            fetchTasks();
        }

        if (props === "Roof") {
            const fetchTasks = async () => {
                let data = await getRoof()
                setJobs(data)
            }
            fetchTasks();
        }

        if (props === "Wall") {
            const fetchTasks = async () => {
                let data = await getWall()
                setJobs(data)
            }
            fetchTasks();
        }

    },[])
=======
        fetchTasks()
    }, [toggle])
  
  async function handleDelete(e) {
    await deleteJob(e.target.value)
    setToggle(prevState => !prevState)
  }
>>>>>>> 3fe700a7e1b53b4216f8c40449ee411e7a489f1a

    return (
        
        <>
        {jobs.map((job) => (
            <div data-aos="fade-up" className="card-container" id={job.projectType} key={job._id}>
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
        ))}
        </>
    )
}
