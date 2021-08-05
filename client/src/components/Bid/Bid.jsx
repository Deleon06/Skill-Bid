import React, {useState} from 'react'

export default function Bid() {
    const [bid, setBid] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bid)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label></label>
            <input className="bid-input" placeholder="Bid" type="number" value={bid} required onChange={(e) => setBid(e.target.valueAsNumber)}/>
            <input className="bid-btn" type="submit" value="Confirm Bid" />
        </form>
    )
}
