import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import "./Regsiter.css";

const Register = () => {
  return (
    <div className="container">
      <div className="register-container">
        <div className="heading">
          <h1>Create your account</h1>
          <p>to continue with Bukhari Nikkah</p>
        </div>

        <div className="social-login">
          <button className="social-btn">
            <FcGoogle size={"1.5rem"} /> <span>Continue with Google</span>{" "}
          </button>
          <button className="social-btn">
            <IoLogoApple size={"1.5rem"} /> <span>Continue with Apple</span>
          </button>
        </div>

        <div className="divider-container">
          <div className="divider"></div>
          <p className="divider-or">or</p>
          <div className="divider"></div>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className="login-credentials">
          <div className="full-name">
            <div className="name">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" required/>
            </div>
            <div className="name">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>
          </div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" required />
          <label htmlFor="password" >Password</label>
          <input type="password" id="password" required />
          <button type="submit">Sign Up</button>
        </form>

        <div className="no-account">
          <p>Already a user?</p>
          <Button
            color={"rgb(251 64 108/1)"}
            fontSize={"0.85rem"}
            variant={"link"}
          >
            <Link to={"/login"}>Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
