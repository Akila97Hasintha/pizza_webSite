import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/AkilaPizza.jpg"

import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
      <div className='headerContainer' style= {{backgroundImage: `url(${BannerImage})`}}>
        <div className='form'>
          <h1>Moja Pizza</h1>
          <p>PIZZA TO FIT ANY TASTE</p>
          <Link to="/menu">
              <button>Order Now</button>
          </Link>
          </div>
          
      </div>    
    </div>
    
  )
}

export default Home
