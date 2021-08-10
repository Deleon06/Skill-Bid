import React from 'react'
import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getJob } from "../../services/jobs"
import "./Detail.css"

export default function Detail(props) {

  const [input, setInput] = useState("");
  const [job, setJob] = useState([])


  const { id } = useParams()


  const history = useHistory();

  useEffect(() => {
    const fetchTasks = async () => {
      let job = await getJob(id)
      console.log(job)
        setJob(job)

    }
    fetchTasks()
}, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Your message was sent!")
    alert("Your message was successfully sent!")
    history.push("/")
  }
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }


  return (
    
    <div id="container">
  
      {/* <div className="detail-container"> */}
      <div id="detailContents">
            <h2 id="jobName">{job.name}</h2>
            <h4 id="pType">Type: {job.projectType}</h4>
            <p id="jobDesc">{job.description}</p>
        <h4 id="budget">Budget: ${job.budget}</h4>
      </div>
 
      <div id="form">
        <form id="contactForm" onSubmit={handleSubmit}>
        <hr/>
        <h4 id="contactSeller">Contact Seller</h4><br />
            <label id="nameLabel">Name</label> <br />
            <input
              type="text"
              id="name"
             
              value={input.name}
              onChange={handleChange}
            />
            <br />
            <label id="emailLabel">Email</label> <br />
            <input
              type="text"
            
              id="email"
              value={input.email}
              onChange={handleChange}
            />
            <br />

            <label id="descLabel">Description</label> <br />
            <input
              type="text"

              id="description"
              value={input.description}
            onChange={handleChange}
            />
              <br />
          <button className="send-btn">Send</button>
          <hr/>
        </form>
      </div>
        {/* </div> */}
      
    </div>
    )
}
