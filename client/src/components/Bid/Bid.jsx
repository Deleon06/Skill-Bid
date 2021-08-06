import React, {useState, useRef, useEffect} from 'react'

export default function Bid() {
    const [bid, setBid] = useState('');
    const ref = useRef(bid);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bid)
        ref.current = bid;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label></label>
            <input className="bid-input" placeholder="Bid" type="number" value={bid} required onChange={(e) => setBid(e.target.value)}/>
            <input className="bid-btn" type="submit" value="Confirm Bid" />
            <h1>{ref.current}</h1>
        </form>
    )
}
