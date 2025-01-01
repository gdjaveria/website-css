

import React from 'react'
import Image from 'next/image';
import './Hero.css'; 
import { GiCoffeeBeans } from "react-icons/gi";
import { BsTrophyFill } from "react-icons/bs";
import { SiCoffeescript } from "react-icons/si";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Hero = () => {
  return (

    <>
    <div id='home' className='coffee-banner'>
        <h1>Welcome To Our <br/>Coffee Shop</h1>
        <p>Discover the rich flavors and aromas of our freshly brewed coffee. 
        Join us for a cozy experience and indulge in our selection of 
        artisanal blends, pastries, and more. Your perfect cup awaits
        </p>
        </div>

     <div className="why-different-container">
      <h2 className="title">Why are we different</h2>
      <p className="subtitle">We did not just make your coffee, we make your day</p>
      <div className="features">
        <div className="feature-card">
          <div className="icon"><GiCoffeeBeans size={65}/>
          </div>
          <h3>Supreme Beans</h3>
          <p>Beans that provide great taste</p>
        </div>
        <div className="feature-card">
          <div className="icon"><BsTrophyFill size={65}/>
          </div>
          <h3>High Quality</h3>
          <p>We provide the highest quality</p>
        </div>
        <div className="feature-card">
          <div className="icon"><SiCoffeescript size={65}/>
          </div>
          <h3>Extraordinary</h3>
          <p>Coffee like you have never tasted</p>
        </div>
        <div className="feature-card">
          <div className="icon"><FaRegMoneyBillAlt size={65}/>
          </div>
          <h3>Affordable Price</h3>
          <p>Our coffee prices are easy to afford</p>
        </div>
      </div>



      <section className="coffee-section">
      <div className="coffee-image">
        <Image src="/table.00.jpg" alt="coffee"
         width={400} height={400} />
      </div>
      <div className="coffee-content">
        <h1>The Best Quality Coffee Tastes At One Place</h1>

      <p>
          Indulge in the rich, velvety taste of the finest coffee 
         crafted to perfection. Every sip tells a story of handpicked beans,
          expertly roasted to unlock their full flavor potential. With notes
          of caramel, chocolate, and a hint of floral brightness, our coffee 
          delivers a smooth, balanced profile that lingers long after the 
          drop. Whether you prefer it bold or mellow, our coffee promises 
          an unparalleled experience for true coffee connoisseurs. 
          Taste the difference in every cup 
      </p>
      </div>
    </section>
    </div>
     
    </>



    
  );
};


 
export default Hero;
