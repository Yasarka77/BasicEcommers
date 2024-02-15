
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import './ProductDetail.css'
 
const ProductDetail = () => {
const {id} = useParams()
const [product, setProducts] = useState({})

const getSingleproduct = async() => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/single/${id}`)
    console.log(response.data.data)
    setProducts(response.data.data)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() =>{
  getSingleproduct()

})



  return (
    <div>
      <h1>Product Details</h1>
      <div className="product-details-container">
        <div>
        <img src={product.img} alt="product-img" />
        </div>
      
      <div>
        <h1>{product.productName}</h1>
        <h2>{product.price}</h2>
        <button> add to cart</button>
      </div>
    </div>
    </div>
  )
}

export default ProductDetail