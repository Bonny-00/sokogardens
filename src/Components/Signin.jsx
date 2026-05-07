import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
    // declare our states here 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // states of posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
        const [strength, setStrength] = useState("");
        const navigate =useNavigate()
    
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
            if (response.data.user){
                localStorage.setItem("user", JSON.stringify(response.data.user))
                navigate ("")
            }
        }
        catch (error) { 
            setError (error.message)
            setLoading ("");

        


        }     }

    const checkpasswordStrength = (password) => {
        if (password.length < 4) {
            setStrength("Weak");
        }
        else if (password.length < 8) {
            setStrength("Medium")
        }
        else {
            setStrength("Strong")
        }
    }

    return (
        <div className="row mt-3   justify-content-center">
            <div className="col-md-6 card shadow bg-dark">
                <h1 className='oi-regular text-white'>Sign in</h1><br />
                {/* bind the states  */}
                <i className="text-primary">{loading}</i>
                <i className="text-success">{success}</i>
                <i className="text-danger">{error}</i>
                <form action="" onSubmit={handlesubmit}>
                    <input type="email" placeholder='📧Email' className=' form-control rancho-regular' onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <input type="password" placeholder='🔐Password' className='form-control rancho-regular' onChange={(e) =>{ setPassword(e.target.value)
                        checkpasswordStrength(e.target.value)}} /><br />
                         {password && (
                            <p
                                style={{
                                    color:
                                        strength === "Weak"
                                            ? "red"
                                            : strength === "Medium"
                                                ? "orange"
                                                : "green",
                                }}
                            >
                                Password strength: {strength}
                            </p>
                        )}
                       git 
                    <button type='Submit' className='btn btn-outline-warning text-white  w-100 oi-regular'>Sign in</button>
                    <p className='rancho-regular text-white'>Don't have an account?  <Link to="/Signup" >Sign up</Link></p>
                </form>

            </div>

        </div>
    )
}

export default Signin