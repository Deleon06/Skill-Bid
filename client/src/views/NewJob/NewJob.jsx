import {useState} from 'react'
import Layout from "../../components/Layout/Layout"
import {createJob} from "../../services/jobs"
import {useHistory} from 'react-router'

export default function NewJobs(props) {
    const[input, setInput] = useState({})
    const history = useHistory()


const handleChange = (e) => {
    const {id, value} = e.target;

    setInput((prevInput) => ({
        ...prevInput,
        [id]: value,
    }))
}

const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(input)
    history.push('/')
}
return (
    <div>
        <Layout user={props.user} setUser={props.setUser}>
            <div className="jobpost-container">
                New Job
                <form onSubmit={handleSubmit}>
                    <br />
                    <label>Name</label>
                    <br />
                    <br />
                    <input 
                        placeholder="name"
                        type="text"
                        id="name"
                        value={input.name}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <label>Project</label>
                    <br />
                    <br />
                    <select className="dropdown"> 
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
                    <br />
                    <br />
                    <textarea
                        placeholder="description of job"
                        type="text"
                        id="description"
                        value={input.description}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <label>Budget</label>
                    <br />
                    <input 
                        placeholder="$"
                        type="number"
                        id="budget"
                        value={input.budget}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </Layout>
    </div>
)
}