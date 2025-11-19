import { faFacebook, faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faPhone, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='bg-success p-2'>
      <div className='align-items-center justify-content-center d-flex '>
  
        <div className='my-3 text-white'>
        <h1><FontAwesomeIcon icon={faTruck} className='text-white ms-2'/>Daily Cart</h1>
        <p>Design and build with all the love in the world by Luminar team with the help of out contribution.</p>
        <p>Code licensed Luminar,docs CC BY 3.0</p>
        <p>currently v5.3.2</p>
        </div>
  
        <div className='m-5 text-white'>
          <h1>Links</h1>
          <Link to={'/'} className='text-decoration-none text-white'><p>Home Page</p></Link>
          <Link to={'/wishlist'} className='text-decoration-none text-white'><p>Wishlist</p></Link>
          <Link to={'/cart'} className='text-decoration-none text-white'><p>Cart</p></Link>
        </div>
  
        <div className='m-5 text-white'>
          <h1>Guides</h1>
          <Link to={''} className='text-decoration-none text-white'><p>React</p></Link>
          <Link to={''} className='text-decoration-none text-white'><p>React Bootstrap</p></Link>
          <Link to={''} className='text-decoration-none text-white'><p>React Router</p></Link>
        </div>
  
        <div className='m-5 text-white'>
          <h1 className='fw-bold'>Contact Us</h1>
          <div className='d-flex align-items-center'><input type="text" className='form-control my-2' placeholder='Enter Your email here'/><FontAwesomeIcon icon={faArrowRight}/></div>
          <div>
            <a href=""><FontAwesomeIcon icon={faXTwitter} className='text-white fs-4 my-2'/></a>
            <a href=""><FontAwesomeIcon icon={faInstagram} className='text-white fs-4 my-2 ms-3'/></a>
            <a href=""><FontAwesomeIcon icon={faFacebook} className='text-white fs-4 my-2 ms-3'/></a>
            <a href=""><FontAwesomeIcon icon={faLinkedin} className='text-white fs-4 my-2 ms-3'/></a>
            <a href=""><FontAwesomeIcon icon={faGithub} className='text-white fs-4 my-2 ms-3'/></a>
            <a href=""><FontAwesomeIcon icon={faPhone} className='text-white fs-4 my-2 ms-3'/></a>
          </div>
        </div>
        
      </div>
      <p className='text-white text-center fw-bold'>Copyright © July 2024 Batch, Daily Cart. Built with React Redux.</p>
    </div>

    
  )
}

export default Footer