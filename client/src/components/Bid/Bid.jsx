import React, {useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { updateJob } from '../../services/jobs';

export default function Bid() {
  const [bid, setBid] = useState({});
  const {id} = useParams()
    // const ref = useRef(bid);
  
    
  
    const handleChange = (e) => {
      const {id, value} = e.target;

      setBid((prevInput) => ({
          ...prevInput,
          [id]: value,
      }))
  }
    const handleSubmit = async (e) => {
        e.preventDefault();
      console.log(bid)
        // ref.current = bid;
    }

    return (
        <form onSubmit={handleSubmit}>
        <label></label>
        <input className="bid-input" placeholder="Bid" type="number"
          value={bid} required onChange={(e) => setBid(e.target.value)} /> 
        <input className="bid-btn" type="submit" value="Confirm Bid" />
            {/* {/* <h1>{ref.current}</h1> */}
        </form>
    )
}
