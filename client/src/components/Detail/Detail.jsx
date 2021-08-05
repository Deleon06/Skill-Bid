import React from 'react'
import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getJob } from "../../services/jobs"

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
      <div className="detail-container">
            <div>
            <h1>{job.name}</h1>
            <h2>{job.projectType}</h2>
            <p>{job.description}</p>
            <h2>{job.budget}</h2>
            </div>
      </div>
        
      <div id="form">
        <label>Contact Seller</label>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={input.name}
              onChange={handleChange}
            />
            <br />
            <label>Email</label>
            <input
              type="text"

              id="email"
              value={input.email}
              onChange={handleChange}
            />
            <br />

            <label>Description</label>
            <input
              type="text"

              id="description"
              value={input.description}
            onChange={handleChange}
            />
              <br />
            <button>Send</button>
        </form>
      </div>
      </div>
    )
}
