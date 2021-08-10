import { useState } from 'react'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'
import './SignOn.css'

export default function SignIn() {
    const [logIn, setLogIn] = useState(false)
    const [input, setInput] = useState({ email: "", password: ""})
    const history = useHistory();

    const toggleSignIn = () => {
        setLogIn(!logIn);
    };

    if(logIn){
        document.body.classList.add("active-signin")
    } else {
        document.body.classList.remove("active-signin")
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = await signIn(input)
        console.log(user)
        history.push('/')
        document.location.href="/"
    }

    const handleInput = (e) => {
        const {id, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }))
    }

    return (
        <div className="sign-container">
        <div onClick={toggleSignIn} className="sign-in">Already a member? Sign In</div>
        {logIn && (
            <div data-aos="fade-down"  data-aos-duration="450" className="modal-sign">
            <div onClick={toggleSignIn} className="overlay-signin"><b>Sign-In</b></div>
            <div className="signin-content">
            <br />
            <div className="sign-txt"></div>
            <br />
            <br />
            <div className='sign-form'>
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
                <button className="sign-btn" >Sign In</button>
                <br />
            </form>
            </div>
        <button className="close-signin" onClick={toggleSignIn}>X</button>
        </div>
        </div>
     )}
        </div>
    )
}