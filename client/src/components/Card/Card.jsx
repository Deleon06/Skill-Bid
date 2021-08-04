import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import {getAllJobs, getBathroom, getElectrical, getFloor, getKitchen, getLandscape, getPlumbing, getRoof, getWall, getCeiling, getPaint} from "../../services/jobs"
import {useState, useEffect} from "react"

AOS.init();

export default function Card(props) {
    const[jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            let data = await getAllJobs()
            setJobs(data)
        }
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
            </div>
        ))}
        </>
    )
}
