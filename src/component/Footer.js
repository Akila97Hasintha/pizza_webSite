import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import  Facebook  from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <Facebook />
            <TwitterIcon />
            <LinkedInIcon />
        </div>
        <p> &copy; 2023 akilaspizza.cpm</p>
    
    </div>
  )
}

export default Footer
