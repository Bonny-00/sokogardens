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
                            <img src="images/download (6).jpeg" alt="" style={{ height: "350px", width: "1200px", objectFit: "cover" }} />
                        </div>
                        {/* <!-- division with image two  --> */}
                        <div class="carousel-item ">
                            <img src="images/download (8).jpeg" alt="" style={{ height: "350px", width: "1200px", objectFit: "cover" }} />
                        </div>
                        {/* <!-- division with image three  --> */}
                        <div class="carousel-item active">
                            <img src="images/download (4).jpeg" alt="" style={{ height: "350px", width: "1200px", objectFit: "cover" }} />
                        </div>
                        {/* <!-- a division with image four  --> */}
                        <div class="carousel-item">
                            <img src="images/download (7).jpeg" alt="" style={{ height: "350px", width: "1200px", objectFit: "cover" }} />
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