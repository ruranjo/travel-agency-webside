
import style from 'styled-components'
import logo from '../assets/logo.png'
import { BsPerson } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";


export default function Navbar() {
  return (
    <Nav>
        <div className="brand">
            <img src={logo} alt="logo" />
        </div>
        <div className="toggle">

        </div>
        <div className="links">
            <ul>
                <li>
                    <a href="#services">Home</a>
                </li>
                <li>
                    <a href="#destination"> Destination</a>
                </li>
                <li>
                    <a href="#offer">Offer</a>
                </li>
                <li>
                    <a href="#tour">Tour</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
            </ul>
        </div>
        <div className="account-info">
            <div className="account">
                <span>
                    <BsPerson/>
                </span>
                <span>My Account</span>
            </div>
            <div className="search">
                <IoSearchOutline/>
            </div>
        </div>
    </Nav>
  )
}

const Nav = style.nav`
    display:flex;
    justify-content: space-between;
    align-items:center;
    .brand{
        img{
            cursor:pointer;
        }
    }
    .toggle{
        display:none;
    }
    .links{
        ul{
            display:flex;
            gap:2rem;
            list-style-type:none;
            li{
                a{
                    text-decoration:none;
                    color: black;
                    cursor:pointer;
                    transition: var(--default-transition);
                    &:hover{
                        color: var(--primary-color);
                    }
                }
            }
        }
    }
    .account-info{
        display: flex;
        gap: 2rem;
        .account{
            display:flex;
            gap: 0.5rem;
        }
        .search{
            cursor:pointer;
        }
    }
`
