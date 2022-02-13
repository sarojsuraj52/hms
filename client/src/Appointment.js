import React , {useState} from 'react'
import './Appointment.css';
import axios from "axios";

export default function Appointment() {
    const [input, setInput] = useState({
        department: '',
        name: '',
        gender: '',
        phone: '',
        email: '',
        date: ''
    })

    function handleChange(event){
        const {name, value} = event.target;
        setInput(prevInput =>{
            return {
                ...prevInput,
                [name] : value
            }
        })
    }

    function handleClick(event){
        // event.preventDefault();
        
        alert( 'We received your appointment')
        
        const newNote = {
            department: input.department,
            name: input.name,
            gender: input.gender,
            phone: input.phone,
            email: input.email,
            date: input.date
            
        }
        
        axios.post('/appointment', newNote)
        
    }

    



    return (
        <>
            {/* <Navbar /> */}
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
                        <img src={require("./images/4.jpg")} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={require("./images/5.jpg")} class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={require("./images/6.jpg")} class="d-block w-100" alt="" />
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

            {/* Form start */}
            <div className="form-container ">
            <h1 class=" text-center Heading mt-4 pt-4 mb-4">Make an Appointment</h1>
                <form  onSubmit={handleClick}>
                <div class="form-group mb-4">
                        <select class="form-control"  placeholder='Gender' name='department'  onChange={handleChange} value={input.department} required>
                        <option value="" hidden>Department</option>
                        <option>Neurology</option>
                        <option>Traumatology</option>
                        <option>Cardiology</option>
                        <option>Dentistry</option>
                        <option>Opthalmalogy</option>
                        <option>Paediatric</option>
                        <option>Pulmonary</option>
                        <option>Full Body</option>
                        </select>
                    </div>
                    <div class="form-group mb-3">
                        <input type="text" class="form-control"  placeholder="Enter Your Fullname" name='name' onChange={handleChange} value={input.name} />
                    </div>
                    <div class="form-group mb-4">
                        <select class="form-control"  placeholder='Gender' name='gender' onChange={handleChange} value={input.gender} required >
                        <option value=""  hidden>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                        </select>
                    </div>
                    <div class="form-group mb-4">
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone" name='phone' onChange={handleChange} value={input.phone}  required/>
                    </div>
                    <div class="form-group mb-4">
                        <input type="email" class="form-control"  placeholder="someone@gmail.com" name='email' onChange={handleChange} value={input.email} />
                    </div>
                    <div class="form-group mb-4">
                        <input type="date" class="form-control"  name='date' onChange={handleChange} value={input.date} required/>
                        
                    </div>
                   
                    <button  type="submit" class="btn  form-control mb-5">Submit</button>
                </form>
            </div>
            
        </>
    )
}
