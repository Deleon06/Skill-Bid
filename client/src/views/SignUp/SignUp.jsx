import { useState } from 'react'
import { signUp } from '../../services/users'
import Layout from "../../components/Layout/Layout.jsx"
import { useHistory } from 'react-router-dom'

export default function SignUp(props) {
    const [input, setInput] = useState({ username: "", email: "", password: ""})
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = await signUp(input)
        console.log(user)
        props.setUser(user)
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
            Sign Up
            <br />
            <br />
            <form onSubmit={handleSubmit}>
            <label>Username</label>
                <br />
                <input
                type="text"
                id="username"
                value={input.username}
                onChange={handleInput}
                />
                <br />
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
                <button>Sign Up</button>
                <br />
            </form>
        </Layout>
    )
}