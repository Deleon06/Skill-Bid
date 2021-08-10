import { useState } from 'react'
import { signUp } from '../../services/users'
import Layout from "../../components/Layout/Layout.jsx"
import { useHistory } from 'react-router-dom'
import "./SignUp.css";

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
            <div data-aos="zoom-in-up" data-aos-duration="750">
            <br />
            <br />
            <br />
            <form className="submit-form"onSubmit={handleSubmit}>
            <label className="username"><b>Create an account</b></label>
                <br />
                <br />
                <div className="signup-content">
                <input
                type="text"
                id="username"
                value={input.username}
                onChange={handleInput}
                />
                <br />
                <br />
                <label>Email</label>
                <br />
                <br />
                <input 
                    type="email"
                    id="email"
                    value={input.email}
                    onChange={handleInput}
                />
                <br />
                <br />
                <label>Password</label>
                <br />
                <br />
                <input 
                    type="password"
                    id="password"
                    value={input.password}
                    onChange={handleInput}
                />
                </div>
                <br />
                <button className="signup-btn">Sign Up</button>
                <br />
            </form>
            </div>
        </Layout>
    )
}