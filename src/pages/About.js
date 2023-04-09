import React from 'react'
import Image from "../assets/about.jpg"
import "../styles/About.css"
function About() {
  return (
    <div className='about' >
        <div className='aboutTop'
        style={{backgroundImage: `url(${Image})`}} >

huhh
        </div>
        <div className='aboutBotttom' >
            <h1>About Us</h1>
            <p>
            One of the sweetest fruit of building an online presence is the increase of 
            credibility and building a stronger brand. Regardless of your product or service,
             such a marketing scheme is never a waste of resources. Let this pizza website design
              enkindle your interest in developing yours. Buddha Pizza offers premium pizza with top ingredients
              . It has a super creative website design that can marvel every customer. This website is ready to carry 
              its brand to the next level by putting great significance to visual hierarchy, nice typography,
               and other user-friendly features with GSAP animation.
                It uses sticky side navigation to provide quick and easy access on other pages. 
                It also has a creative hero header with neat line icons that serve as a category.
                 See why you shouldn’t miss this inspiration.
            </p>
        </div>
      
    </div>
  )
}
 
export default About
