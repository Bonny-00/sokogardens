import axios from 'axios'
import React, { useState } from 'react'

const Addproduct = () => {
    // declare  the states
    const [product_name, setProduct_Name] = useState("")
    const [product_description, setProduct_Description] = useState("")
    const [product_cost, setProduct_Cost] = useState("")
    const [product_photo, setProduct_Photo] = useState("")

    // states for hosting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait....")
        // creating an empty envelope 
        const formdata = new FormData()
        formdata.append("product_name", product_name)
        formdata.append("product_description", product_description)
        formdata.append("product_cost", product_cost)
        formdata.append("product_photo", product_photo)
        try {
            const response = await axios.post("http://bonifacekifaru.alwaysdata.net/api/add_product", formdata)
            setSuccess(response.data.message)
            setLoading("")
        }
        catch (error) {
            setError (error.message)
            setLoading ("");

         }
    }
    return (
        <div className=' row  justify-content-center mt-3'>
            <div className="col-md-9 card shadow p-2 bg-dark">
                <h1 className='text-danger oi-regular'>Add products</h1>
                {/* bind the states  */}
                <i className="text-primary">{loading}</i>
                <i className="text-success">{success}</i>
                <i className="text-danger">{error}</i>


                <form action="" onSubmit={handlesubmit}>
                    <input type="text" placeholder='Enter product name  ' className='form-control rancho-regular' onChange={(e) => setProduct_Name(e.target.value)} /><br /><br />
                    <textarea name="" id="" className='form-control rancho-regular' placeholder='💬Enter product desctription' onChange={(e) => setProduct_Description(e.target.value)}></textarea><br /><br />
                    <input type="number" placeholder='💸Enter product cost' className='form-control rancho-regular' onChange={(e) => setProduct_Cost(e.target.value)} /><br /><br />
                    <input type="file" accept='image/*' className='form-control  rancho-regular' onChange={(e) => setProduct_Photo(e.target.files[0])} /><br /><br />
                    <button type='Submit' className='btn btn-outline-warning w-100 oi-regular'> Add product</button>
                </form>
            </div>

        </div>
    )
}

export default Addproduct