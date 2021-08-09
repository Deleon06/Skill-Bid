import React, { useState, useEffect } from 'react'
import "./Bid.css"

export default function Bid({job}) {
    const [bid, setBid] = useState('');
    const [id, setId] = useState(job._id);
 
    useEffect(()  => {

        const getInfo =  async () => { 
        const data = await window.localStorage.getItem(`bid-${id}`)
        setBid(data)
        }
        if(id){
        getInfo()
    }
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        window.localStorage.setItem(`bid-${job._id}`, bid);
        setId(job._id);
        console.log(bid)
    }
    const handleChange = (e) => {
        e.preventDefault();
        setBid(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label></label>
            <input className="bid-input" placeholder="Bid" type="number" value={bid} required onChange={((e) => handleChange(e) )}/>
            <input className="bid-btn" type="submit" value="Confirm Bid" />
            <h1>{bid}</h1>
        </form>
    )
}
