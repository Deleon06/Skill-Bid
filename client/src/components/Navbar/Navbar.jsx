import React, {useState} from 'react'
import styled from 'styled-components';
import About from '../Modal-About/Modal-About';
import { signOut } from '../../services/users';
import SignIn from '../../views/SignIn/SignIn';
import './Navbar.css'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
    const handleSignOut = () => {
      signOut();
      props.setUser(null);
    };

    const upperCase = (str) => {
      return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      })
    }
    return (
        <Nav>
            <Logo href="/">
                Skill<span>Bid</span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
        </Hamburger>
        {props.user ? (
          <>
            <div className='signedNav'>
            <div id='userName'>Hello {upperCase(props.user?.username)}!</div>
              <button id='signOut' onClick={handleSignOut}>Sign Out</button>
            <Menu isOpen={isOpen}>
              <About />
            <MenuLink href="/NewJob" id="newJob">New Job</MenuLink>
            <MenuLink href="/ContactUs" id="signedContactUs">Contact Us</MenuLink>
              </Menu>      
              </div>
         </>
        ) : (
          <div className="unsignedNav">
            <Menu isOpen={isOpen}>
            <MenuLink href="/sign-up" id="signUp"></MenuLink>
               <SignIn />
        
            <About />
                <MenuLink href="/ContactUs" id="contactUs">Contact Us</MenuLink>
             
              </Menu>
              </div>
        )}
        </Nav>
    );
};

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-image: linear-gradient(to top, #CE9D91, #D65F2F);
    position: relative;
    z-index: 20;
    opacity: 0.8;
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span{
        height: 2px;
        width: 25px;
        background: black;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px){
        display: flex;
    }
`;

const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: black;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    font-weight: bold;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
    }
`
const Logo = styled.a`
    padding: 1rem 0;
    color: white;
    text-decoration: none;
    font-weight: 800;    
    font-size: 1.7rem;
    opacity: 0.9;

    span{
        font-weight: 300;
        font-size: 1.3rem;
    }
`

export default Navbar;
