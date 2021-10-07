import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getJob, updateJob } from "../../services/jobs";
import Layout from "../../components/Layout/Layout";
import './UpdateJob.css';

export default function UpdateJob(props) {
  const history = useHistory();
  const { id } = useParams();
  const data = {
    name: "",
    projectType: "",
    description: "",
    budget: "",
  }
  const [editedJob, setEditedJob] = useState(data);

  useEffect(() => {
    const fetchJob = async () => {
      const job = await getJob(id);
      setEditedJob(job)
    }
    fetchJob()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedJob((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(editedJob)

    await updateJob(id, editedJob)
    history.push("/")
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div>
        <h2 id='editTitle'>Edit your job</h2><br />
        <div className="jobedit-container">
      <form onSubmit={handleSubmit}>
      <label>Name</label><br />
        <input
            type="text"
            name="name"
            value={editedJob.name}
            onChange={handleChange} />
        <br />
        <label>Project Type</label><br />
        <select className="type-filter"name="projectType" onChange={handleChange}
          value={editedJob.projectType}>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Ceiling">Ceiling</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Floor">Floor</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Landscape">Landscape</option>
                    <option value="Paint">Paint</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Roof">Roof</option>
                    <option value="Wall">Wall</option>
                </select>
        {/* <input
            type="text"
            name="projectType"
            value={editedJob.projectType}
            onChange={handleChange} /> */}
        <br />
        <label>Description</label><br />
        <input
            type="text"
            name="description"
            value={editedJob.description}
            onChange={handleChange} />
        <br />
        <label>Budget</label><br />
        <input 
            name="budget" 
            placeholder="$"
            type="number"
            id="budget"
            value={editedJob.budget}
            onChange={handleChange}
          />
                <br />
        <button id="editBtn" type="submit">Edit Post</button><br />
          </form>
          </div>
      </div>
      </Layout>
  )
}