import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

const Password = () => {
  return (
    <div className="container-login">
      <div className="password-container">
        <div className="heading">
          <h1>Enter Your Password</h1>
          <p>to continue with Bukhari Nikkah</p>
        </div>

        <div className="email-display">
            <Avatar size="sm"/>
            <h3>Example@gmail.com</h3>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className="login-credentials">
          <label htmlFor="password">Password <span>Forgot password?</span></label>
          <input type="password" id="password" required/>
          <button type="submit">Login</button>
        </form>

        <div className="no-account">
          <Button color={'rgb(251 64 108/1)'}  fontSize={'0.85rem'} variant={'link'} ><Link to={'/login'}>Use another method</Link></Button>
        </div>
      </div>
    </div>
  );
}

export default Password;
