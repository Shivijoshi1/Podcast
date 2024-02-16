import React from 'react'
import style from "../Component/MainComp.module.css";
import poster from '../Images/Banner.png'
import lorm from '../Images/Auto Layout Vertical.png'
import img1 from '../Images/Mask group (2).png';
import img2 from '../Images/Mask group (7).png';
import img3 from '../Images/Mask group (3).png';
import img4 from '../Images/Mask group (4).png';
import img5 from '../Images/Mask group (5).png';
import img6 from '../Images/Mask group (6).png';
import { VscRefresh } from "react-icons/vsc";
import card1 from '../Images/Group.png';
import card2 from '../Images/Group (1).png';
import card3 from '../Images/Group (2).png';
import cardimg1 from '../Images/Ellipse.png';
import cardimg2 from '../Images/Ellipse (1).png';

function MainComp() {
  return (
    <div>
    <div className={style.maincomp}>
      <img src={poster} alt="" srcset="" />

    </div>

    <div className={style.podcast}>
      <h2>POPULAR PODCAST</h2>
      <div className={style.displaycomp}>
        <div className={style.firstdiv}>
          <h1 className={style.numberone}>01.</h1>
          <div className={style.lorm}><img src={lorm} alt="" srcset="" /></div>
        </div>
        <div className={style.seconddiv}>
          <h1 className={style.secondnum}>02.</h1>
          <h3>What is Lorem </h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
        </div>
        <div className={style.thirddiv}>
        <h1 className={style.numberthird}>03.</h1>
        <div className={style.lorm}><img src={lorm} alt="" srcset="" /></div>
        

        </div>
      </div>

     
    </div>
    <div className={style.letest}>
      <div className={style.let1}>
        <div><h1>LATEST EPISODES</h1></div>
        <div><button>All</button></div>
        <div><button>Season 1</button></div>
        <div><button>Season 2</button></div>
        <div><button>Season 3</button></div>
      </div>
      <div className={style.imagegallery}>
        <div><img src={img1} alt="" srcset="" />
        <p>Season 1</p>
        <h5>The standard Lorem Ipsum passage</h5>
        <h6>May 21,2022 · 1 hr 01 min</h6>
   
      
        </div>
  
        <div><img src={img2} alt="" srcset="" /> <p>Season 1</p>
        <h5>The standard Lorem Ipsum passage</h5>
        <h6>May 21,2022 · 1 hr 01 min</h6></div>
        <div><img src={img3} alt="" srcset="" /> <p>Season 1</p>
        <h5>The standard Lorem Ipsum passage</h5>
        <h6>May 21,2022 · 1 hr 01 min</h6></div>
        <div><img src={img4} alt="" srcset="" /> <p>Season 1</p>
        <h5>The standard Lorem Ipsum passage</h5>
        <h6>May 21,2022 · 1 hr 01 min</h6></div>
        <div><img src={img5} alt="" srcset="" /> <p>Season 1</p>
        <h5>The standard Lorem Ipsum passage</h5>
        <h6>May 21,2022 · 1 hr 01 min</h6></div>
        <div><img src={img6} alt="" srcset="" /> <p>Season 1</p>
        <h5>The standard Lorem Ipsum passage</h5>
        <h6>May 21,2022 · 1 hr 01 min</h6></div>
      </div>
      <button className={style.btn}>Learn More <VscRefresh /> </button>
    </div>
    <div className={style.feature}>
      <div className={style.featurebox1}>
        <h1>OUR TOP TIER FEATURES</h1>
      </div>
      <div className={style.featurebox2}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p></div>
       </div>
       <div className={style.card}>
        <div className={style.carddiv}>
          <img src={card1} alt="" srcset="" />
          <h1>What is Lorem Ipsum?</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className={style.carddiv}>
          <img src={card2} alt="" srcset="" />
          <h1>Where does it come from?</h1>
          <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
        </div>
        <div className={style.carddiv}>
          <img src={card3} alt="" srcset="" />
          <h1>Where can I get some?</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>

        </div>
       </div>
       <div className={style.saying}>
      <div className={style.sayingbox1}>
        <h1>WHAT ARE THEY SAYING?</h1>
      </div>
      <div className={style.sayingbox2}>
        <p>It has been proven that thousands of users are satisfied with the features we provide, here are some words from them </p></div>
       </div>
       <div className={style.sayingcard}>
        <div>
          <h1 className={style.ccc}>
         <img src={cardimg1} alt="" />
         <h1>Lorem Ipsum <p>What is Lorem</p></h1>
         
         </h1>
         <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        </div>
        <div>
        <h1 className={style.ccc}>
         <img src={cardimg2} alt="" />
         <h1>Lorem Ipsum <p>What is Lorem</p></h1>
         
         </h1>
         <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        </div>
       </div>
       <div className={style.ragister}>
        <h1>Ragister With Us</h1>
        <div className={style.ragistercont}>
          <input type='text' placeholder='willie.jennings@example.com'/>
          <button>Ragister</button>
        </div>
       </div>
    </div>
  )
}

export default MainComp;