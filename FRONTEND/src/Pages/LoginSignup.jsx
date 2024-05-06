import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="Last name"></input>
          <input type="email" placeholder="Email Address"></input>
          <input type="password" placeholder="Password"></input>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?<span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input className = "login-input-box" type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
