import React from "react";
import "./Onboarding.css";
import {Link } from "react-router-dom";

const Onboarding = () => {
  return (

    <div className = 'Onboarding'>

      <div className = 'Onboarding__top'>
        <div className = 'Onboarding__text'>
            <p className = 'Onboarding__slogan'>It's simple. It's Rize.</p>
        </div>
      </div>
      <div className = 'Onboarding__bottom'>
        <div className = 'Onboarding__btns'>
            <div className = 'Onboarding__btn1'>
              <Link to = '/Login' class="Onboarding__login">Log In</Link>
            </div>
            <div className = 'Onboarding__btn2'>
              <Link to = '/Signup' class="Onboarding__signup">Sign Up</Link>
            </div>
        </div>
        <div className = 'Onboarding__research'>
            <div className = 'Onboarding__messagebox'>
            <p className = 'Onboarding__message'>Are you a researcher? Join </p>
            </div>
            <div className = 'Onboarding__btn3'>
                <a href="" className="Onboarding__here">Here!</a>
            </div>
        </div>
    </div>

    </div>
  )
};

export default Onboarding;
