import React from "react";
import "./Login.css";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Login = () => {
  const [isHoveringGoogle, setIsHoveringGoogle] = useState(false);
  const [isHoveringApple, setIsHoveringApple] = useState(false);

  const handleMouseOverGoogle = () => {
    setIsHoveringGoogle(true);
  };

  const handleMouseOutGoogle = () => {
    setIsHoveringGoogle(false);
  };

  const handleMouseOverApple = () => {
    setIsHoveringApple(true);
  };
  const handleMouseOutApple = () => {
    setIsHoveringApple(false);
  };
  


  return (
    <div className="container-login">
      <div className="login-container">
        <div className="heading">
          <h1>Sign In</h1>
          <p>to continue with Bukhari Nikkah</p>
        </div>

        <div className="social-login">
          <button
            onMouseOver={handleMouseOverGoogle}
            onMouseOut={handleMouseOutGoogle}
            className="social-btn"
          >
            {isHoveringGoogle === true ? (
              <div className="btn-div">
                <FcGoogle size={"1.5rem"} />
                <span>
                  Continue with Google <FaLongArrowAltRight size={"20"} />
                </span>
              </div>
            ) : (
              <div className="btn-div">
                <FcGoogle size={"1.5rem"} /> <span>Continue with Google</span>{" "}
              </div>
            )}
          </button>
          <button
            onMouseOver={handleMouseOverApple}
            onMouseOut={handleMouseOutApple}
            className="social-btn"
          >
            {isHoveringApple === true ? (
              <div className="btn-div">
                <IoLogoApple size={"1.5rem"} />
                <span>
                  Continue with Apple <FaLongArrowAltRight size={"20"} />
                </span>
              </div>
            ) : (
              <div className="btn-div">
                <IoLogoApple size={"1.5rem"} /> <span>Continue with Apple</span>
              </div>
            )}
          </button>
        </div>

        <div className="divider-container">
          <div className="divider"></div>
          <p className="divider-or">or</p>
          <div className="divider"></div>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className="login-credentials">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" required />
          <button type="submit">
            <Link to={"/password"}>Continue</Link>
          </button>
        </form>

        <div className="no-account">
          <p>No account?</p>
          <Button
            color={"rgb(251 64 108/1)"}
            fontSize={"0.85rem"}
            variant={"link"}
          >
            <Link to={"/register"}>Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
