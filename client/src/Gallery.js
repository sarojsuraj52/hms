import React from 'react';
import './Gallery.css'

export default function Gallery() {
    return (
        <div>
            {/* Start Carousal view */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require("./images/3.jpg")} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={require("./images/2.jpg")} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={require("./images/1.jpg")} class="d-block w-100" alt="" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* End od Carousal View  */}

            {/* Start Image Gallery */}
            <div class="container">
                <h1 class=" text-center Heading mt-4 pt-4 mb-0">Image Gallery</h1>
                <h4 class="fw-light text-center  mt-2 mb-0">A Glance of our hospital ecosystem</h4>
                <hr class="mt-2 w-75 m-auto mb-5" />
                <div class="row d-flex flex-wrap align-items-center" data-toggle="modal" data-target="#lightbox">
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (1).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (2).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (3).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (4).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (5).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (6).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (7).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (8).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (9).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (10).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (11).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <img src={require("./images/i (12).jpg")} data-target="#indicators" data-slide-to="0" alt="" />
                    </div>
                   
                </div>



            </div>

            {/* End of Gallery */}
        </div>
    );
}
