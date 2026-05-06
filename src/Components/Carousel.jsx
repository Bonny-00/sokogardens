import React from 'react'

const Carousel = () => {
    return (
        <section class="row">
            <div class="col-md-12">
                {/* <!-- division with carousel content  --> */}
                <div class="carousel  slide" data-bs-ride="carousel" id="mycarousel">
                    {/* <!-- inner division  --> */}
                    <div class="carousel-inner">
                        {/* <!-- division with image one  --> */}
                        <div class="carousel-item">
                            <img src="images/ChatGPT Image May 6, 2026, 03_45_49 PM.png" alt="" style={{ height: "500px", width: "1500px", objectFit: "cover" }} />
                        </div>
                        {/* <!-- division with image two  --> */}
                        <div class="carousel-item ">
                            <img src="images/ChatGPT Image May 6, 2026, 03_49_08 PM.png" alt="" style={{ height: "500px", width: "1500px", objectFit: "cover" }} />
                        </div>
                        {/* <!-- division with image three  --> */}
                        <div class="carousel-item active">
                            <img src="images/ChatGPT Image May 6, 2026, 03_56_26 PM.png" alt="" style={{ height: "500px", width: "1500px", objectFit: "cover" }} />
                        </div>
                        {/* <!-- a division with image four  --> */}
                        <div class="carousel-item">
                            <img src="images/ChatGPT Image May 6, 2026, 03_50_44 PM.png" alt="" style={{ height: "500px", width: "1500px", objectFit: "cover" }} />
                        </div>
                    </div>
                    {/* <!-- previous control  --> */}
                    <a href="#mycarousel" data-bs-slide="prev" class="carousel-control-prev">
                        <span class="carousel-control-prev-icon bg-success"></span>
                    </a>
                    {/* <!-- next control  --> */}
                    <a href="#mycarousel" data-bs-slide="next" class="carousel-control-next">
                        <span class="carousel-control-next-icon bg-success"></span>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Carousel