import React from 'react'
import ContImage from "../assets/contact.jpg"
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
        style ={{backgroundImage: `url(${ContImage})`}} >

        </div>
        <div className='rightSide' >
            <h1 >Contact Us</h1>

            <form id ="contact" method='POST' >
                <label htmlFor='name' >Full Name</label>
                <input name='name' placeholder="enter Full Name.." type="tex" />
                <label htmlFor='name' >Email</label>
                <input name='name' placeholder="enter Email.." type="email" />
                <label htmlFor='message' >Message</label>
                <textarea rows="6" placeholder='enter email' name="name" required ></textarea>
                <button type ="submit">Send Message</button>
                
            </form>
        </div>
      
    </div>
  )
}

export default Contact
