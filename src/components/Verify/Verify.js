import React from "react";
import "./Verify.css";
import clap from '../Verify/clap.png'
import arm from '../Verify/arm.png'
import {Link } from "react-router-dom"


const Verify = () => {
    return (
  
      <div className = 'Verify'>
            <img src = {arm} className = "Verify__arm" alt = "arm" />
            <img src = {clap} className = "Verify__clap" alt = "clap" />

            <h3 className = 'Verify__congrats'>Congrats!</h3>
             <p className = 'Verify__content'>
                You have successfully completed your profile.
                Press the button below to verify your email
                and continue to find a trial now!
            </p>

            <div className="Verify__btn" type="submit">
              <Link to = '/Login' class="Verify__text">Continue</Link>
            </div>
       
        

      </div>
    )
  };
  
  export default Verify;