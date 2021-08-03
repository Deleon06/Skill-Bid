import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useHistory } from 'react-router';

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
    console.log('Your message was sent!')
    alert("Your message was successfully sent!")
    history.push('/')
}

  return (
      <Layout>
        <div>
            <form className="contactUs" onSubmit={handleSubmit}>
                <input 
            type="text"
            id="name"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
          /><br />
          <textarea 
            type="text"
            id="message"
            placeholder="Message"
            value={input.message}
            onChange={handleChange}
          /><br />
          <button>Contact Us</button>
            </form>
      </div>
      </Layout>
    )
}
