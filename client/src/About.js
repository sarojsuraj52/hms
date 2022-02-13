import React from 'react'
import './About.css'



export default function About() {
    return (
        <>
    
            {/* About us starts here */}
            <div class="bg-light">
                <div class="container py-5">
                    <div class="row h-100 align-items-center py-5">
                        <div class="col-lg-6">
                            <h1 class="display-6">CITY HOSPITAL</h1>
                            <h1 class=" Heading font-weight-bold">Every community, every neighbourhood, every life - Whole and healthy</h1>
                            <p class="lead text-muted mb-0">CITY HOSPITAL is the largest healthcare ecosystem across India, on a mission to support your whole health.</p>                           
                        </div>
                        <div class=" mt-4 col-lg-6  d-lg-block">
                            <img src={require("./images/hospital-vector.png")} alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white py-5">
                <div class="container py-5">
                    <div class="row align-items-center mb-5">
                        <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light Heading">Convenience at your finger tip</h2>
                            <p class="font-italic text-muted mb-4">We care about your precious time so that you no longer need to wait for your turn for getting an appointment. Also this reduce the workload on our staff.As of January 18, all services have resumed at CITY HOSPITAL for common people, including the COVID-19 patients, which is open 24 hours a day. The hospital has been extensively cleaned and sanitized since it is pandemic time. Teams have been working diligently  to prepare for the best healthcare service to our people. The hospital’s air and water have been extensively tested to ensure quality and are in excellent condition.</p>
                            <a  class="btn btn-light px-5 rounded-pill change shadow-sm">Thanks to Dr. Suraj and Rupesh</a>
                        </div>
                        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={require("./images/boy-laptop.jpg")} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-5 px-5 mx-auto"><img src={require("./images/emergency.png")} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                        <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light Heading">Special EMERCENGY ward</h2>
                            <p class="font-italic text-muted mb-4">We have a special emergecy wards for specially enabled people and non male and female humans for their better care. We improve lives and strengthen communities by honoring the mind, body and spirit in equal measure. We understand that the way care is provided is as meaningful as the care itself, that's why we listen to and connect with every patient we serve. Then, now and always.</p>
                            <a  class="btn btn-light px-5 rounded-pill shadow-sm change">Kindness of our respected Doctors</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-light py-5">
                <div class="container py-5">
                    <div class="row mb-4">
                        <div class="col-lg-12">
                            <h2 class="display-4 font-weight-light">Meet our highest experienced doctors</h2>
                            <p class="font-italic text-muted">A legacy of daring and caring.</p>
                        </div>
                    </div>

                    <div class="row text-center">
                        {/* <!-- Team item--> */}
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={require("./images/d1.png")} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Sakshi More</h5><span class="small text-uppercase text-muted">MBBS</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End--> */}

                        {/* <!-- Team item--> */}
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={require("./images/d2.png")} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Suraj Saroj</h5><span class="small text-uppercase text-muted">Pathologist</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End--> */}

                        {/* <!-- Team item--> */}
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={require("./images/d3.png")} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Rupesh Singh</h5><span class="small text-uppercase text-muted">Radiologist</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End--> */}

                        {/* <!-- Team item--> */}
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={require("./images/d4.png")} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Jayesh Singh</h5><span class="small text-uppercase text-muted">MBBS</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End--> */}

                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
