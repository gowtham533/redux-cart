import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


function Pnf() {
  return (
  
    <>
    <Header/>
      <div style={{height:"80vh"}} className='text-center align-items-center justify-content-center d-flex flex-column'>
        <h1 style={{fontSize:'80px'}} className='fw-bold'>404</h1>
        <h4 className='fst-italic'>PAGE NOT FOUNDED</h4>
         <button className='btn btn-outline-success my-3'><Link to={'/'} className='text-decoration-none text-dark'>BACK TO HOME</Link></button>
      </div>
    </>
  )
}

export default Pnf