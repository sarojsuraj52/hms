import React from "react";
import './Home.css';

export  default  function  Home() {
    return (
        <>
            
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
                        <img src={require("./images/1.jpg")} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={require("./images/2.jpg")} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={require("./images/3.jpg")} class="d-block w-100" alt="" />
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

            {/* Start of grid view */}
            <div class=" bg">

                <h1 class=" text-center Heading mt-4 pt-4 mb-0">Departments</h1>
                <h4 class="fw-light text-center  mt-2 mb-0">Free Health Checkup for Students</h4>

                <hr class="mt-2 w-75 m-auto" />


                <div class="row text-center text-lg-start department">

                    <div class="col-lg-3 col-md-4 col-6 mb-5 ">
                        <div href="#" class="d-flex flex-column  align-items-center  mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={require("./images/neurology.png")} alt="" />
                            <h5 class="mt-4 text-center">Neurology</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 mb-5">
                        <div class="d-flex flex-column  align-items-center mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={require("./images/traumatology.png")} alt="" />
                            <h5 class="mt-4 text-center">Traumatology</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 mb-5">
                        <div class="d-flex flex-column  align-items-center mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={require("./images/cardiology.png")} alt="" />
                            <h5 class="mt-4 text-center">Cardiology</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 mb-5">
                        <div class="d-flex flex-column  align-items-center mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={require("./images/dentistry.png")} alt="" />
                            <h5 class="mt-4 text-center">Dentistry</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 mb-5">
                        <div class="d-flex flex-column  align-items-center mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={require("./images/opthalmalogy.png")} alt="" />
                            <h5 class="mt-4 text-center">Opthalmalogy</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 mb-5">
                        <div class="d-flex flex-column  align-items-center mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={require("./images/pedatric.png")} alt="" />
                            <h5 class="mt-4 text-center">Paediatric</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 mb-5">
                        <div class="d-flex flex-column  align-items-center mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={require("./images/pulmonary.png")} alt="" />
                            <h5 class="mt-4 text-center">Pulmonary</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 mb-5">
                        <div class="d-flex flex-column  align-items-center mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src={require("./images/human.png")} alt="" />
                            <h5 class="mt-4 text-center">Full Body</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of grid view */}
            {/* <Footer /> */}
        </>
    );
}
