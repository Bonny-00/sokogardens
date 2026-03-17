import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Getproduct = () => {
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
        catch (error) { }
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
                <h1 className='text-success'>Available products</h1>
                {/* bind the states  */}
                <i className='text-primary'>{loading}</i>
                <i className='text-danger'>{error}</i>

                {product.map(singleproduct => (
                    <div className="col-md-4 card shadow   mb-3">
                        {/* card body goes here  */}
                        <div className="card-body bg-dark">
                            {/* product name goes here  */}
                            <h1 className='text-primary'>{singleproduct.product_name}</h1>
                            {/* image goes here  */}
                            <img src={imagepath + singleproduct.product_photo} alt="" />
                            {/* product desctription goes here  */}
                            <p>{singleproduct.product_description}</p>
                            {/* product cost goes here  */}
                            <b className='text-warning'>{singleproduct.product_cost}</b><br />
                            {/* purchase now button  */}
                            <button className='btn btn-success text-danger w-100'>Purchase now</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Getproduct