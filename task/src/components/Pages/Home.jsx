import React from 'react';
import Reach from './Reach';
import Cards from './Cards';
import Mobile from './Mobile';
import Discover from './Discover';
import './Home.css';


function Home() {
  return (
    <div>
      <img src="./Picture/Realme.jpeg" alt="" />

      <div className='reach'>
        <Reach number='12000+' link='store partners' />
        <Reach number='550+' link='store cities' />
        <Reach number='1cr+' link='trusted customers' />
      </div>

      <div class="feature">
            <span  style={{color: "black", fontWeight:"bold", fontFamily:" poppins, sans-serif"}}>FEATURED</span>&nbsp;
            <span  style={{color: "black", fontFamily:"poppins, sans-serif"}}>STORES</span>
        </div>

        <div className='store'>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>

        <Mobile/>
        <Discover/>
      

    </div>

  )

}

export default Home;