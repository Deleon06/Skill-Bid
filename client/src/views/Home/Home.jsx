import {useState, useEffect} from "react"
import Layout from "../../components/Layout/Layout"
import {getAllJobs} from "../../services/jobs"
import {Link} from "react-router-dom"

export default function Home(props) {
    const[jobs, setJobs] = useState([])

useEffect(() => {
    const fetchTasks = async () => {
        let data = await getAllJobs()
        setJobs(data)
    }
    fetchTasks()
})

const displayEditLink = (job) => {
    if (job.userId === props.user?.id) {
        return <Link to={`/edit-job/${job._id}`}>Edit</Link>
    }
}

return (
    <Layout user={props.user} setUser={props.setUser}>
        {jobs.map((job) => (
            <div>
                {task.name}
                {displayEditLink(job)}
            </div>
        ))}
    </Layout>
)
}