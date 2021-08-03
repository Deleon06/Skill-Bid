import React from 'react'
import Layout from "../../components/Layout/Layout"
import { useState } from "react"
import { useHistory } from "react-router"

export default function Detail() {
  const [input, setInput] = useState("");

  const history = useHistory();

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
    <Layout>
        <div id="container">
        <div className="detail-container">
        {jobs.map((job) => (
            <div>
            <h1>{job.name}</h1>
            <h2>{job.jobtype}</h2>
            <p>{job.description}</p>
            <h2>{job.budget}</h2>
            </div>
            ))}
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
      </Layout>
    )
}
