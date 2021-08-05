import React, {useState} from 'react'
import styled from 'styled-components';
import About from '../Modal-About/Modal-About';
import { signOut } from '../../services/users';
import SignIn from '../../views/SignIn/SignIn';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
    const handleSignOut = () => {
      signOut();
      props.setUser(null);
    };

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
            <div>{props.user?.username}</div>
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/NewJob">New Post</MenuLink>
            <MenuLink href="/ContactUs">Contact</MenuLink>
            <About />
              <button onClick={handleSignOut}>Sign Out</button>
         </>
        ) : (
          <Menu isOpen={isOpen}>
            <MenuLink href="/">Home</MenuLink>
          
            <MenuLink href="/ContactUs">Contact</MenuLink>
            <About />
            <SignIn />
            {/* <MenuLink href="/sign-in">Sign-In</MenuLink> */}
            <MenuLink href="/sign-up">Sign-Up</MenuLink>
          </Menu>
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
    background-color: #3feee6;
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

    span{
        font-weight: 300;
        font-size: 1.3rem;
    }
`
export default Navbar;

// export default function Navbar() {
//     return (
//         <>
//             <nav class="leftnav">
//                 <a href="#home">Home</a>
//                 <a href="#contact">Contact Us</a>
//                 <a href="#about">About Us</a>
//             </nav>
//             <nav class="rightnav">
//                 <a href="#home">Sign In</a>
//                 <a href="#contact">Sign Up</a>
//             </nav>
//             <nav class="rightnav">
//                 <a href="#post-project">Post Project</a>
//                 <a href="#inbox">Inbox</a>
//                 <a href="account">Account</a>
//             </nav>
//         </>
//     )
// }

