import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav class="leftnav">
                <a href="#home">Home</a>
                <a href="#contact">Contact Us</a>
                <a href="#about">About Us</a>
            </nav>
            <nav class="rightnav">
                <a href="#home">Sign In</a>
                <a href="#contact">Sign Up</a>
            </nav>
            <nav class="rightnav">
                <a href="#post-project">Post Project</a>
                <a href="#inbox">Inbox</a>
                <a href="account">Account</a>
            </nav>
        </>
    )
}
