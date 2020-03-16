import React from "react";
import "./Dashboard.css";
import logo from '../Dashboard/logo.png'
import leaf from '../Dashboard/leaf.png'
import leaf2 from '../Dashboard/leaf2.png'
import firstName from '../Signup2/Signup2'

const Dashboard = () => {
    return (
  
      <div className = 'Dashboard'>
        <img src = {logo} className = "Dashboard__logo" alt = "Logo" />
        <img src = {leaf} className = "Dashboard__leaf" alt = "Leaf" />
        <img src = {leaf2} className = "Dashboard__leaf2" alt = "Leaf2" />

        <p className = "Dashboard__cta">Clinical trial access,</p>
        <p className = "Dashboard__od">on-demand.</p>


        <p className = "Dashboard__welcome">Welcome</p>
        <p className = "Dashboard__user">{firstName}</p>
        <p className = "Dashboard__punc">!</p>

      </div>
    )
  };
  
  export default Dashboard;
  