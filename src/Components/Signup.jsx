import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    // declear our state here 
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    // three state of posting data
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait.....")

        // create an empty digital envelope 
        const formdata = new FormData()
        formdata.append("username", username)
        formdata.append("email", email)
        formdata.append("password", password)
        formdata.append("phone", phone)
        try {
            const response = await axios.post("http://bonifacekifaru.alwaysdata.net/api/signup", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {

        }
    }
    return (

        <div className="row  mt-3 justify-content-center" >
            <div className='col-md-6  card  shadow'>
                <h1>Sign up</h1>
                {/* bind the states  */}
                <i className="text-warning ">{loading}</i>
                <h2 className='text-success'>{success}</h2>
                <h2 className="text-danger">{error}</h2>
                <form action="" onSubmit={handlesubmit}>
                    <input type="text" placeholder='Enter username' className='form-control' onChange={(e) => setUsername(e.target.value)} /><br /><br />
                    <input type="email" placeholder='Enter email' className='form-control' onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <input type="password" placeholder='Enter password' className='form-control' onChange={(e) => setPassword(e.target.value)} /><br /><br />
                    <input type="phone" placeholder='Enter phone' className='form-control' onChange={(e) => setPhone(e.target.value)} /><br />

                    <button type=' Submit' className='btn btn-danger text-white w-100 '>Sign up</button>
                    <p>Already have an account?             <Link to="/Signin ">Sign in</Link>  </p>
                </form>
            </div>
        </div>
    )
}

export default Signup