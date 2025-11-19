import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'



function Home() {
  const dispatch = useDispatch()
  const {loading,allProducts,error} = useSelector(state=>state.productReducer)
  console.log(allProducts);
  

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  return (

    <>
      <Header/>
        <div className='container py-5'>
          {
            loading?
            <div className='text-center my-4 fw-bolder fs-5'>
              <img width={'500px'} className='me-3' src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="" />
            </div>
            :
          
          <div className="row my-5">
            {/* duplicate */}
            {
              allProducts?.length>0?
              allProducts?.map(product=>(

                <div key={product?.id} className="col-md-3 mb-2">
              <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title>{product?.title}</Card.Title>
                <Link to={`/product/${product?.id}/view`} className='btn btn-outline-secondary text-dark'>View more</Link>
              </Card.Body>
            </Card>
            </div>

              ))
              :
              <p>Product not found...!</p>
            }
            
          </div>
          }
        </div>
    </>
  
  )
}
export default Home