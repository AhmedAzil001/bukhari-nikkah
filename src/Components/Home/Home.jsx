import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import logo1 from "../assets/home-img.png"

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-contents">
        <section className="home-section">
          <h1>
            Welcome to <span>Bukhari Nikkah</span>
          </h1>
          <p className="tag-name">Where Hearts Connect on a Halal Journey!</p>
          <p className="enroll-tag">
            Join us in the pursuit of love, guided by the principles of Halal
            relationships. Your journey begins here welcome to a
            community where hearts meet with intention.
          </p>
          <button>
            <Link to="/pricing">Enroll Now </Link>{" "}
            <GoArrowUpRight size={"1.2rem"} style={{ marginLeft: "5px" }} />
          </button>
        </section>

        <section className="img-section">
          <img src={logo1} alt="" />
        </section>
      </div>
    </div>
  );
};

export default Home;
