import React from 'react';
import './Validate.css';

// login validation
var attempt = 3;
function valid(event) {
  event.preventDefault();
  var password = document.getElementById("myInput").value;
  if (password === "hms@123") {
    alert("Login successfully");
    window.location = "record"; // Redirecting to other page.
    return false;
  }
  if (password === '') {
    alert('Input the password');
  }
  else {
    attempt--;// Decrementing by one.
    alert("You have " + attempt + " attempt left;");
    // Disabling fields after 3 attempts.
    if (attempt === 0) {
      document.getElementById("myInput").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}


// toogle eye
function toggleEye()
{
  var passwordInput = document.getElementById('myInput');
  var passStatus = document.getElementById('toggleEye');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';
    passStatus.className='far fa-eye';
    
  }
  else{
    passwordInput.type='password';
    passStatus.className='far fa-eye-slash';
  }
}


export default function Validate() {

 

  return (
    <>
      <div className='mt-5 mb-5 '>
        <form action="#" class="signin-form  m-auto px-3 py-3">
          <h2 className='Heading pt-4'>Admin Login</h2>
          <div class="form-group mt-3">
            <label class="form-control-placeholder mb-1" for="username">Enter your admin password</label>
            {/* <p>
              <input id="password" type="password" class="form-control length" name='password' placeholder='*******' required />
              <i class="far fa-eye" id="togglePassword"></i>
            </p> */}
            <div class="input-group length mb-3">
            <input id="myInput" type="password" class="form-control " name='password' placeholder='*******' required />
                <span class="input-group-text" id="basic-addon2"><i class="far fa-eye-slash" onClick={toggleEye} id="toggleEye"></i></span>
            </div>

            <button id="submit" type="submit" onClick={valid} class="form-control btn  length px-3 mb-3">Look into database</button>
          </div>

        </form>
      </div>
    </>
  )
}
