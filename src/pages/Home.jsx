import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'



function Home() {
  const dispatch = useDispatch()
  const {loading,allProducts,error} = useSelector(state=>state.productReducer)
  console.log(allProducts);
  
const [currentPage,setCurrentPage] = useState(1)
const productsPerPage = 8
const totalPages = Math.ceil(allProducts.length/ productsPerPage)

const pageItemLastIndex = currentPage * productsPerPage
const pageItemStartIndex = pageItemLastIndex - productsPerPage
const visibleProductArray = allProducts?.slice(pageItemStartIndex,pageItemLastIndex)

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  const navigateNext = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const navigatePrevious = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  return (

    <>
      <Header insideHome={true}/>
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
              visibleProductArray?.map(product=>(

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
            
            <div className="my-3 text-center">

              <button onClick={navigatePrevious} className="btn btn-outline-primary me-2"><FontAwesomeIcon icon={faBackward}/></button>
              <span className='fw-bolder'>{currentPage} of {totalPages}</span>
              <button onClick={navigateNext} className="btn btn-outline-primary ms-2"><FontAwesomeIcon icon={faForward}/></button>
              
            </div>
          </div>
          }
        </div>
    </>
  
  )
}
export default Home