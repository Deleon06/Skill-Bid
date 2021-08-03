import React from 'react'
import Layout from "../../components/Layout/Layout"
import { useState } from "react"
import { useHistory } from "react-router"

export default function Detail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("")

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Your message was sent!")
    alert("Your message was successfully sent!")
    history.push("/")
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
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label>Description</label>
            <input
              type="text"
              value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
              <br />
            <button>Send</button>
        </form>
      </div>
      </div>
      </Layout>
    )
}
