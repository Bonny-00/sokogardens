import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
const Makepayment = () => {
    const { singleproduct } = useLocation().state || {}
    const imagepath = "http://bonifacekifaru.alwaysdata.net/static/images/"
    // define the state 
    const [phone, setPhone] = useState("")

    // state of posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Processing payment......")
        const formdata = new FormData ()
        formdata.append("phone", phone)
        formdata.append("amount", singleproduct.product_cost)
        try {
            const response = await axios.post("http://bonifacekifaru.alwaysdata.net/api/mpesa_payment", formdata)
            setSuccess(response.data.message)
            setLoading("")
        }
        catch (error) {
            setError(error.message)
            setLoading("") ;
        }
    }




    return (
        <div className='row  justify-content-center'>
            <h1 className='text-success oi-regular'>  Make payment- Lipa na Mpesa</h1>
            <div className=' card shadow col-md-6 bg-dark'>
                <h4 className='text-primary  text-start  rancho-regular'>{singleproduct.product_name}</h4>
                <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "300px", objectFit: "contain" }} />
                <p className='text-start text-white'>{singleproduct.product_description}</p>
                <b className="text-start text-danger">Ksh:{singleproduct.product_cost}</b><br />
                {/* bind the states  */}
                <i className="text-primary">{loading}</i>
                <i className="text-success">{success}</i>
                <i className="text-danger">{error}</i>



                <form action="" onSubmit={handlesubmit}>
                    <input type="number" className="form-control text-dark rancho-regular" placeholder='📞Enter phone 254....................' onChange={(e) => setPhone(e.target.value)} /><br />
                    <button type="submit" className="btn btn-outline-success w-100 oi-regular">💰Make payment</button>
                
                    
                </form>

            </div>
        </div>
    )

}
export default Makepayment