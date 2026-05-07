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
    const [visiblecount, setVisiblecount] = useState(8)
    const [search, setSearch] = useState("")
    const [filteredproducts, setFilteredproducts] = useState([])
    const[sortoption,setSortoption]=useState("")
    



    // function to filter products 
    useEffect(() => {
        filterproducts()
    }, [search])
    const filterproducts = () => {
        const filtered = product.filter(singleproduct => singleproduct.product_name.toLowerCase().includes(search.toLowerCase()))
        setFilteredproducts(filtered)
        

    }
    // function to get product 
    const getproduct = async () => {
        setLoading("Please wait...")

        setFilteredproducts(sorted_products);
        try {
            const response = await axios.get("http://bonifacekifaru.alwaysdata.net/api/getproducts")
            setproducts(response.data)
            setLoading("")
        }
        catch (error) {
            setError(error.message)
            setLoading("");

        }
    }
    // call our function
    useEffect(() => {
        getproduct()
    }, [])
    console.log(product);
    const imagepath = "http://bonifacekifaru.alwaysdata.net/static/images/"

    const sorted_products =[...filteredproducts].sort((a, b) => {
            if (sortoption === "price_low_high") {
                return a.product_cost - b.product_cost; 
            }
            if (sortoption === "price_high_low") {
                return b.product_cost - a.product_cost; 
            }
            if (sortoption === "name_ascending") {
                return a.product_name.localeCompare(b.product_name);
            }
            if (sortoption === "name_descending") {
                return b.product_name.localeCompare(a.product_name);
            }
            return 0; 
        });
        
        


    return (
        <div className="container-fluid">
            <div className="row">
                {/* carousel goes here  */}
                <Carousel />
                <h1 className='text-success  oi-regular'>Available products</h1>
                <div className=" row justify-content center mt-3 mb-3">
                    <input
                     type="search" 
                    placeholder="Search products..."
                     className="form-control w-50" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} />
                </div>
                    <div className="col-md-3 mb-2 mt-4 row justify-content-right align-items-right">
                        <select className="form-select" value={sortoption} onChange={(e) => setSortoption(e.target.value)}>
                            <option value="">Sort By</option>
                            <option value="price_low_high">Price: Low - High</option>
                            <option value="price_high_low">Price: High - Low</option>
                            <option value="name_ascending">Name: A - Z</option>
                            <option value="name_descending">Name: Z - A</option>
                        </select>
                    </div>

                {/* bind the states  */}
                <i className='text-primary'>{loading}</i>
                <i className='text-danger'>{error}</i>
            
                {sorted_products.slice(0, visiblecount).map((singleproduct) => (


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
                            <button className="btn btn-outline-danger w-100 oi-regular" onClick={() => navigate("/makepayment", { state: { singleproduct } })}>purchase now</button>
                               
                            </div>
                        </div>
                    </div>
                ))}
                <div className='text-center mt-3'>
                    {visiblecount < filteredproducts.length && (
                        <button
                            className='btn btn-primary'
                            onClick={() => setVisiblecount(visiblecount + 8)}
                        >
                            load More
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Getproduct