import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    // declare our states here 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // states of posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait....")

        //    creating an empty digital envelope 
        const formdata = new FormData()
        formdata.append("email", email)
        formdata.append("password", password)
        try {
            const response = await axios.post("http://bonifacekifaru.alwaysdata.net/api/signin", formdata)
            setSuccess(response.data.message)
            setLoading("")
        }
        catch (error) { }
    }

    return (
        <div className="row mt-3   justify-content-center">
            <div className="col-md-6 card shadow">
                <h1>Sign in</h1><br />
                {/* bind the states  */}
                <i className="text-primary">{loading}</i>
                <i className="text-success">{success}</i>
                <i className="text-danger">{error}</i>
                <form action="" onSubmit={handlesubmit}>
                    <input type="email" placeholder='Email' className=' form-control' onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <input type="password" placeholder='Password' className='form-control' onChange={(e) => setPassword(e.target.value)} /><br />
                    <button type='Submit' className='btn btn-warning text-white  w-100'>Sign in</button>
                    <p>Don't have an account?  <Link to="/Signup" >Sign up</Link></p>
                </form>

            </div>

        </div>
    )
}

export default Signin