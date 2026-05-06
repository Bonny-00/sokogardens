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
    const [strength, setStrength] = useState("");
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
            setError(error.message)
            setLoading("");

        }
    }
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
        <div className='full-height'>


            <div className="row  mt-3 justify-content-center" >
                <div className='col-md-6  card  shadow bg-dark'>
                    <h1 className='oi-regular text-white'>Sign up</h1>
                    {/* bind the states  */}
                    <i className="text-warning ">{loading}</i>
                    <h2 className='text-success'>{success}</h2>
                    <h2 className="text-danger">{error}</h2>
                    <form action="" onSubmit={handlesubmit}>
                        <input type="text" placeholder='👤Enter username ' className='  form-control rancho-regular' onChange={(e) => setUsername(e.target.value)} /><br /><br />
                        <input type="email" placeholder='📧Enter email' className='form-control rancho-regular' onChange={(e) => setEmail(e.target.value)} /><br /><br />
                        <input type="password" placeholder='🔐Enter password' className='form-control rancho-regular' onChange={(e) => { setPassword(e.target.value); checkpasswordStrength(e.target.value) }} /><br /><br />
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
                        <input type="phone" placeholder='📞Enter phone' className='form-control rancho-regular' onChange={(e) => setPhone(e.target.value)} /><br />

                        <button type=' Submit' className='btn btn-outline-danger text-white w-100  oi-regular'>Sign up</button>
                        <p className='rancho-regular text-white '>Already have an account?             <Link to="/Signin ">Sign in</Link>  </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup