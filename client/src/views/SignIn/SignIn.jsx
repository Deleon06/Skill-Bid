import { useState } from 'react'
import { signIn } from '../../services/users'
import Layout from "../../components/Layout/Layout"
import { useHistory } from 'react-router-dom'

export default function SignIn(props) {
    const [input, setInput] = useState({ email: "", password: ""})
    const {setUser} = props
    const history = useHistory();


    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = await signIn(input)
        console.log(user)
        setUser(user)
        history.push('/')
    }

    const handleInput = (e) => {
        const {id, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }))
    }

    return (
        <Layout>
            <br />
            Sign In
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <br />
                <input 
                    type="email"
                    id="email"
                    value={input.email}
                    onChange={handleInput}
                />
                <br />
                <label>Password</label>
                <br />
                <input 
                    type="password"
                    id="password"
                    value={input.password}
                    onChange={handleInput}
                />
                <br />
                <button>Sign In</button>
                <br />
            </form>
        </Layout>
    )
}