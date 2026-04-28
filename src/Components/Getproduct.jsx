import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel';
const Getproduct = () => {
    let navigate = useNavigate();
    // declare our states here 
    const [loading, setLoading] = useState("")
    const [product, setproducts] = useState([])
    const [error, setError] = useState("")
    // function to get product 
    const getproduct = async () => {
        setLoading("Please wait...")

        try {
            const response = await axios.get("http://bonifacekifaru.alwaysdata.net/api/getproducts")
            setproducts(response.data)
            setLoading("")
        }
        catch (error) {
            setError (error.message)
            setLoading ("");

         }
    }
    // call our function
    useEffect(() => {
        getproduct()
    }, [])
    console.log(product);
    const imagepath = "http://bonifacekifaru.alwaysdata.net/static/images/"


    return (
        <div className="container-fluid">
            <div className="row">
                {/* carousel goes here  */}
                <Carousel />
                <h1 className='text-success  oi-regular'>Available products</h1>
                {/* bind the states  */}
                <i className='text-primary'>{loading}</i>
                <i className='text-danger'>{error}</i>

                {product.map(singleproduct => (
                    <div className="col-md-4    mb-3">
                        <div className='card shadow h-100'>
                            {/* card body goes here  */}
                            <div className="card-body bg-dark">
                                {/* product name goes here  */}
                                <h1 className='text-primary rancho-regular'>{singleproduct.product_name}</h1>
                                {/* image goes here  */}
                                <img src={imagepath + singleproduct.product_photo} alt="" style={{ objectFit: "contain", height: "200px" }} />
                                {/* product desctription goes here  */}
                                <p className='text-white  '>{singleproduct.product_description}</p>
                                {/* product cost goes here  */}
                                <b className='text-warning'>{singleproduct.product_cost}</b><br />
                                {/* purchase now button  */}
                                <button className='btn btn-danger w-100 oi-regular ' onClick={() => navigate("/makepayment", { state: { singleproduct } })}>Purchase now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Getproduct