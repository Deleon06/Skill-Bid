import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'

export default function Layout(props) {
    return (
        <div>
            <Navbar user={props.user} setUser={props.setUser}/>
                <div>{props.children}</div>
            <Card />
            <Footer />
        </div>
    )
}
