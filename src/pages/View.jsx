import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'


function View() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)

  const dispatch = useDispatch()
  // get product id from url
  const {id} = useParams()
  console.log(id);
  // state for storing product to be view
  const [product,setProduct] = useState({})
  console.log(product);

  useEffect(()=>{
    if(sessionStorage.getItem("products")){
      const allProducts = JSON.parse(sessionStorage.getItem("products"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
  
  const handleWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item.id==id)
    if(existingProduct){
      // alert("product already added to wishlist...!")
      Swal.fire({
        title: 'Sorry!',
        text: 'product already added to wishlist...!',
        icon: 'error',
        confirmButtonText: 'Good job'
      })
    }else{
      // add product to wishlist in redux store - dispatch action
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = ()=>{
    const existingProduct = userCart?.find(item=>item.id==id)
    dispatch(addToCart(product))
    Swal.fire({
        title: 'Completed!',
        text: existingProduct?`Quantity of ${product.title} is updated successfully` : `product added to cart`,
        icon: 'success',
        confirmButtonText: 'Done'
      })
  }
  
  return (
    <>
    <Header/>
    <div className='container py-5'>
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img className='img-fluid' src={product?.thumbnail} alt="" />
          <div className="d-flex align-items-center justify-content-between my-3">
            <button onClick={handleWishlist} className='btn btn-outline-primary'>ADD TO WISHLIST</button>
            <button onClick={handleCart} className='btn btn-outline-success'>ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className='fw-bold'>{product?.title}</h1>
          <p className='text-danger fw-bold fs-3'>$ {product?.price}</p>
          <p><span className='fw-bold'>Brand</span> : {product?.brand}</p>
          <p><span className='fw-bold'>Category</span> : {product?.category}</p>
          <p><span className='fw-bold'>Description</span> :{product?.description} </p>

          <h4 className='fw-bold my-3'>Client Reviews</h4>
          {/* duplicate div */}
          {
            product?.reviews?.length>0?
            product?.reviews.map((item,index)=>(
              <div key={index} className='border rounded p-3 my-2 shadow'>
            <p><span className='fw-bold'>{item?.reviewerName}</span> : {item?.comment}</p>
            <p>Rating : {item?.rating}<FontAwesomeIcon icon={faStar} className='text-warning'/></p>
          </div>
            ))
            :
            <div>No client reviews are available</div>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default View