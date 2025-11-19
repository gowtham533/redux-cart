import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'



function Whistlist() {
  return (
    <>
      <Header/>
      <div className='container py-5'>
        <div className="row my-5">
        <div className="col-md-3-mb-2">
              <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src="https://m.media-amazon.com/images/I/71kVWZfiVxL.jpg" />
              <Card.Body className='text-center'>
                <Card.Title>Card Title</Card.Title>
                <div className="d-flex-justify-content-evenly-my-1">
                  <button className='btn text-danger fs-4 mx-2 p-1'><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                  <button className='btn text-danger fs-4 p-1'><FontAwesomeIcon icon={faCartPlus}/></button>
                </div>
              </Card.Body>
            </Card>
            </div>
        </div>
      </div>
    </>
  )
}

export default Whistlist