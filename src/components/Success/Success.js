import React from "react";
import "./Success.css";
import hands from '../Success/hands.png'
import {Link } from "react-router-dom"
import email from "../Signup/Signup"

const Success = () => {
    return (
  
      <div className = 'Success'>

            <img src = {hands} className = "Success__hands" alt = "hands" />
            <img src = {hands} className = "Success__hands1" alt = "hands" />
          

          <h5 className = 'Success__welcome'>Welcome to Rize Health!</h5>
          <p className = 'Success__sent'>An email has been sent to:</p>
          <p className = 'Success__email'>{email}</p>
          <p className = 'Success__instructions'>
            Please follow the instruction in the verification email 
            to finish creating your account.
          </p>

          <a href="" className="Success__no">Didn't recieve an email?</a>
        
          <div className="Success__btn" type="submit">
              <Link  class="Success__text">Resend verification email</Link>
          </div>

        </div>
     
    )
  };
  
  export default Success;