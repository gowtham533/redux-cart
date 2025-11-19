import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function View() {
  return (
    <>
    <Header/>
    <div className='container py-5'>
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img className='img-fluid' src="https://m.media-amazon.com/images/I/71kVWZfiVxL.jpg" alt="" />
          <div className="d-flex align-items-center justify-content-between my-3">
            <Link to={'/wishlist'}><button className='btn btn-outline-primary'>ADD TO WISHLIST</button></Link>
            <Link to={'/cart'}><button className='btn btn-outline-success'>ADD TO CART</button></Link>
          </div>
        </div>
        <div className="col-md-6">
          <h1>GAMING CONTROLLER</h1>
          <p className='text-danger fw-bold fs-3'>$ 16.99</p>
          <p>Brand : Zebronics</p>
          <p>Category : Gaming</p>
          <p><span className='fw-bold'>Description</span> : A gaming controller is a handheld device used to interact with video games. It typically features two analog sticks for smooth movement, a directional pad (D-pad), and several action buttons for performing in-game tasks like jumping, shooting, or interacting. Most controllers also include shoulder and trigger buttons for additional control options. Designed to fit comfortably in your hands, a controller offers precise input, quick reactions, and an immersive gaming experience. Modern controllers may also include vibration feedback, wireless connectivity, and customizable buttons to enhance gameplay. </p>

          <h4 className='fw-bold my-3'>Client Reviews</h4>
          <div className='border rounded p-3 shadow'>
            <p><span className='fw-bold'>user12345</span> : recommended!</p>
            <p>Rating : 3<FontAwesomeIcon icon={faStar} className='text-warning'/></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View