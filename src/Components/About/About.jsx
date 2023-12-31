import React from "react";
import "./About.css";
import AboutCard from "./AboutCard";
import img1 from "./about-assets/img1.png";
import img2 from "./about-assets/img2.jpg";
import img3 from "./about-assets/img5.svg"

const data=[
  {
    key:"1",
    img:img1,
    heading:"100% Privacy",
    description:" We prioritize the security and confidentiality of your details."
  },
  {
    key:"2",
    img:img2,
    heading:"Matching",
    description:"Discover your perfect match on our Nikkah website."
  },
  {
    key:"3",
    img:img3,
    heading:"24x7 Help and Support",
    description:"We're here for you every step of the way. "
  },
]

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>
          About <span>Us</span>
        </h1>
        <p>
          At Bukhari Nikkah, we embrace the beauty of meaningful connections
          rooted in Halal principles. Step into a world where your journey to
          companionship is met with trust, authenticity, and advanced matching
          tailored to your unique values.
        </p>
      </section>

      <section className="policy-section">
        <h3>Our Services</h3>
        <p>
          Discover a platform designed to safeguard your privacy while fostering
          genuine connections. Our commitment is to provide you with a secure
          and welcoming space as you embark on the path to finding a compatible
          partner for a blessed union.
        </p>
      </section>

      <div className="services-container">
        {
          data.map((data)=>{
           return <AboutCard img={data.img} heading={data.heading} description={data.description} key={data.key}/>
          })
        }
      </div>
    </div>
  );
};

export default About;
