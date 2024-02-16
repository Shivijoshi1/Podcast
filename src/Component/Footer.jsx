import React from 'react'
import style from "../Component/Footer.module.css";
import logos from '../Images/Group 14.png';
import insta from '../Images/Group.png'
import face from '../Images/Vector (1).png'

function Footer() {
  return (
    <div>
      <div className={style.borde}></div>

      <div className={style.footer}>
        <div>
          <h4>Navigation</h4>
          <p>Home</p>
          <p>Listen</p>
          <p>Upload Podcast</p>
        </div>
        <div>
        <h4>Information</h4>
          <p>About us</p>
          <p>Contact us</p>
        </div>
        <div>
          <img  src={logos} alt="" srcset="" />
        </div>
        <div>
        <h4>Our socials</h4>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
        <div>
        <h4>Usefull links</h4>
          <p>Privacy policy</p>
          <p>Terms & conditions</p>
        </div>
      </div>
      <div className={style.border}></div>
      <div className={style.end}>
        <h1>Podcasts 2023 | All rights reserved</h1>
        <h2>Follow us:</h2>
        <img src={insta} alt="Insta" srcset="" />
        <img src={face} alt="Facebook" srcset="" />
      </div>
    </div>
  )
}

export default Footer