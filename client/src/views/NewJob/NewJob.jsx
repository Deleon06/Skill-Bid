// in progress
//import {useState} from 'react'
// import Layout from "../../components/Layout/Layout"
// import {createJob} from "../../services/jobs"
// import {useHistory} from 'react-router'

// export default function NewJobs(props) {
//     const[input, setInput] = useState({})
//     const history = useHistory()


// const handleChange = (e) => {
//     const {id, value} = e.target;

//     setInput((prevInput) => ({
//         ...prevInput,
//         [id]: value,
//     }))
// }

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createJob(input)
//     history.push('/')
// }
// return (
//     <div>
//         <Layout user={props.user} setUser={props.setUser}>
//             <div>
//                 New Job
//                 <form onSubmit={handleSubmit}>
//                     <label>Name</label>
//                 </form>
//             </div>
//         </Layout>
//     </div>
// )
// }