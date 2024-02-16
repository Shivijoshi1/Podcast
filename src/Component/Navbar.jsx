import React from 'react'
import style from "../Component/Navbar.module.css"
import logo from '../Images/Group 14.png'
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className={style.mainnav}>
        <div className={style.logo}>
            <img src={logo} alt="" srcset="" />
        </div>
        <div className={style.navcont}>
          <ul>
            <li>Home</li>
            <li>Upload Podcast</li>
            <li>Listen</li>
            <li>About Us</li>
            </ul>
        </div>
        <div className={style.SearchBar}>
            <input type='text' placeholder='' />
            {/* <div className='searchicon '><IoSearchOutline/></div> */}
        </div>
        <div className={style.Login}>
          <h3>Login</h3>
          </div>
        <div className={style.signup}>
          <button>Signup</button>
        </div>

    </div>
  )
}

export default Navbar