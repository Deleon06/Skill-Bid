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
    
      <div className="container">
      <div className="detail-container">
            <div>
            <h1>{job.name}</h1>
            <hr/>
            <h2>{job.projectType}</h2>
            <hr/>
            <p>{job.description}</p>
            <hr/>
            <h2>{job.budget}</h2>
            <hr/>
            </div>
      </div>
        
      <div id="form">
        <label id="contact-sell">Contact Seller</label>
        <br/>
        <br/>
          <form onSubmit={handleSubmit}>
            <label></label>
            <input className="name-contact"
              type="text"
              id="name"
              placeholder="Name"
              value={input.name}
              onChange={handleChange}
            />
            <br />
            <br />
            <label></label>
            <input className="email-contact"
              placeholder="Email"
              type="text"
              id="email"
              value={input.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <label></label>
            <textarea className="description-contact"
              type="text"
              id="description"
              placeholder="Description"
              value={input.description}
            onChange={handleChange}
            />
            <br />
            <button className="send-btn">Send</button>
        </form>
      </div>
      </div>
    )
}
