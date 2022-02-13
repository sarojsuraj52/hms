import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer class="section bg-footer">
                <div class="container ">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="">
                                <Link className="navbar-brand mx-1" to="/validation">
                                    <img src={require("./images/Hlogo.png")} alt='logo' width="60px" />
                                    CITY HOSPITAL
                                </Link>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><a className="text-light">NAVI MUMBAI</a></li>
                                    <li><a className="text-light">Plot no 131, Sector 28, Sector 28,</a></li>
                                    <li><a className="text-light">Vashi Road, Kopri Rd, Navi Mumbai,</a></li>
                                    <li><a className="text-light">Maharashtra 400703 India</a></li>
                                    <li><a className="text-light">India</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="">
                                <h6 class="footer-heading text-uppercase text-white">Important Links</h6>
                                <ul class="list-unstyled footer-link mt-4">
                                    <li><Link class="contact-info" to="/">Home </Link></li>
                                    <li><Link class="contact-info" to="/appointment">Appointment</Link></li>
                                    <li><Link class="contact-info" to="/about">About</Link></li>
                                    <li><Link class="contact-info" to="/gallery">Gallery</Link></li>
                                    <li><Link class="contact-info" to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>



                        <div class="col-lg-4">
                            <div>
                                <h6 class="footer-heading text-uppercase text-white">Contact Us</h6>
                                <p class="contact-info mt-4">Contact us if need help with anything</p>
                                <p class="contact-info"><a href="tel://8850912764">+91 88509 12764</a></p>
                                <div class="mt-5">
                                    <ul class="list-inline">
                                        <a href="https://www.facebook.com/MDCityHealthCare/" target="_blank" class="fab fa-facebook mx-2"></a>
                                        <a href="https://twitter.com/nehealthcity?lang=en" target="_blank" class="fab fa-twitter mx-2"></a>
                                        <a href="https://www.instagram.com/city__hospital/" target="_blank" class="fab fa-instagram mx-2"></a>
                                        <a href="https://wa.me/+91-8850912764?text=I'm%20interested%20for%20appointment" target="_blank" class="fab fa-whatsapp mx-2"></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="text-center mt-5">
                    <p class="footer-alt mb-0 f-14 text-wrap">2022 © SURAJ SAROJ | RUPESH SINGH, All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}
