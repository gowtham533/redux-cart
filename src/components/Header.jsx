import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Container,Navbar, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../redux/slices/productSlice'





function Header({insideHome}) {

const userWishlist = useSelector(state=>state.wishlistReducer)
const userCart = useSelector(state=>state.cartReducer)
// console.log(userWishlist);
const dispatch = useDispatch()



  return (
    <Navbar expand="lg" className="bg-success position-fixed w-100 z-1">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faTruckFast} className='me-3'/>Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-md-center">
          { 
            insideHome &&
            <Nav.Item><input onChange={e=>dispatch(searchProducts(e.target.value))} type='text' className='form-control me-lg-5' placeholder='search by product name'></input></Nav.Item>
            }
          <Link to={'/wishlist'}className='text-decoration-none text-light fw-bold '><FontAwesomeIcon icon={faHeart} className='text-danger me-1'/>WISHLIST<Badge pill bg='dark' className='ms-1 me-3'>{userWishlist?.length}</Badge></Link>
          <Link to={'/cart'}className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faCartShopping} className='text-secondary me-1'/>CART<Badge pill bg='dark' className='ms-1'>{userCart?.length}</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header