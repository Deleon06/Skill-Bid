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
        console.log(jobs)
    },[props]) 
    
    async function handleDelete(e) {
        await deleteJob(e.target.value)
        setToggle(prevState => !prevState)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(props.user.id === e.target.parentElement.accessKey) {
         (window.confirm("Are you sure you want to delete the job post?")) 
        handleDelete(e)
        history.push("/")
        document.location.href="/"
        }
    }
  
  // const handleUp = (e) => {
  //     if (count > copyData.length) {
  //       count = 0;
  //       page = 0;
  //     } else {
  //       countSplice(copyData, count, count + 10, page, "up")
  //     }
  // }
  
  // const handleDown = (e) => {
  //     if (count < 0) {
  //       count = 0;
  //       page = 0;
  //     } else {
  //       countSplice(copyData, count, count + 10, page, "down")
  //     }
  //   }

  //   function countSplice(array, begin, end, page, direction) {
  //     console.log(count)
    
  //     function helper(array, begin, end){
  //       let newArr = array.slice(begin, end)
  //       console.log(newArr)
  //     }  
  //     if (direction === "up") {
  //       helper(array, begin, end)
  //       count += 10;
  //       page += 1;
        
  //     } else if (direction === "down") {
  //       helper(array, begin - 20, end - 20)
  //       count -= 10;
  //       page -= 1;
  //     }
  //   }

    return (
        
      <>
        {/* <button className="down" onClick={handleDown} > ← </button>
        <button className="up" onClick={handleUp} > → </button> */}
        {jobs.map((job) => (
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="card-container" id={job.projectType} accessKey={job.userId}>
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
                Budget: { job.budget}
              </div>
              </Link>
            <div className="bid">
              <Bid job={job}/>
            </div>
            <div className="button-div">
                <button id='editButton'><Link to={`/posts/edit/${job._id}`}>EDIT</Link></button>
                <button value={job._id} onClick={handleSubmit} id='dltButton'>DELETE</button>
            </div>
            </div>
        ))}
        </>
    )
  }


  
