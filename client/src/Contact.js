import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <h1 class=" text-center Heading mt-2 pt-4 mb-0">Contact Us</h1>
                    <h4 class="fw-light text-center  mt-2 mb-0">Feel free to reach us</h4>
                    <div class="col-md-12 d-flex d-flex ailgn-items-center justify-content-center my-5">
                    <iframe title='Map for direction' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120695.26370569918!2d72.94911459210428!3d19.03174815307134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1244cec971f%3A0x98773960bb4db477!2sTilak%20College%20of%20Science%2C%20Commerce%20and%20Arts!5e0!3m2!1sen!2sin!4v1642690355394!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div class="row">
                        <div class="col-md-3 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fas fa-map-marker-alt"></span>
                            </div> 
                            <div class="text text-wrap">
                            <span>Address:</span> <br/> 
                                <p> Plot no 131, Sector 28, Sector 28,
                                Vashi Road, Kopri Rd, Navi Mumbai,
                                Maharashtra 400703
                                    India</p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-phone"></span>
                            </div>
                            <div class="text text-wrap">
                                <p><span>Phone:</span> <br/><a href="tel://8850912764">+91 88509 12764</a></p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-paper-plane"></span>
                            </div>
                            <div class="text text-wrap" >
                                <p><span>Email:</span> <br/> <a href="mailto:rupeshsingh9594@gmail.com">rupeshsingh9594@gmail.com</a></p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center mb-4">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-globe"></span>
                            </div>
                            <div class="text ">
                                <p><span>Website</span> <br/> <a  href="https://sarojsuraj52.github.io/Dance-website" class="text-break"> <p>https://sarojsuraj52.github.io/Dance-website</p></a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
