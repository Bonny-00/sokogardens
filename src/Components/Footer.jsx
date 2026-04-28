import React from 'react'

const Footer = () => {
    return (
        <div>
            <section class="row bg-danger p-4">
                {/* <!-- child 1  --> */}
                <div class="col-md-4 text-red">
                    <h2 class="text-center ">About us</h2>
                    <p class="text-white">We are the basketball association aiming to improve all the lovers of basketball
                        qualitys.And contributing to the upcoming stars of basketball.</p>
                </div>
                {/* <!-- child 2  --> */}
                <div class="col-md-4">
                    <h2 class="text-center text-red">Contact us</h2>
                    <form action="">
                        <input type="email" placeholder="Enter your email" class="form-control bg-info" /><br /><br />
                        <input type="phone" placeholder="Enter your phone no:" class="form-control bg-info" /><br />
                        <textarea name="" cols="30" rows="10" class="form-control bg-warning"
                            placeholder="Leave your comment"></textarea><br />
                        <input type="Submit" value="Send message" class="btn btn-outline-success" />



                    </form>
                </div>
                {/* <!-- child 3 --> */}
                <div class="col-md-4">
                    <h2 class="text-center text-red">Connect with us</h2>
                    <a href="">
                        <img src="images/download.png" alt="fb" width="80px" />
                    </a>
                    <a href="">
                        <img src="images/download (10).jpeg" alt="in" width="80px" />
                    </a>
                    <a href="">
                        <img src="images/download (1).png" alt="x" width="80px" />
                    </a>

                    <p class="text-white">Visit our social media to get trending news and latest videos and photos.</p>
                </div>
            </section>
        </div>

    )
}

export default Footer