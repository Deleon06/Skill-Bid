import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useHistory } from 'react-router';
import './ContactUs.css';



export default function ContactUs() {
  const [input, setInput] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const {id, value} = e.target;
    setInput((prevInput) => ({
        ...prevInput,
        [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Your message was successfully sent!')
    alert("Your message was successfully sent!")
    history.push('/')
}

  return (
      <Layout>
        <div className="contactUs">
            <form className="contactForm" onSubmit={handleSubmit}>
                <input 
            type="text"
            id="cName"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
          /><br />
          <textarea 
            type="text"
            id="cMessage"
            placeholder="Message"
            value={input.message}
            onChange={handleChange}
          /><br />
          <button id="contactButton">Contact Us</button>
            </form>
      </div>
      </Layout>
    )
}
