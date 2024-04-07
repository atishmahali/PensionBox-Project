import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        At PensionBox, we revolutionize retirement planning with our cutting-edge digital platform. Empower your financial future with seamless management, 
        expert guidance, and tailored investment solutions. Experience convenience and security like never before - WELCOME TO THE FUTURE OF PENSIONS.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
title="Choose Your Retirement Advisor"
description="Discover skilled retirement advisors and schedule appointments effortlessly with PensionBox. Our experts prioritize your financial well-being, offering tailored guidance."
/>

<SolutionStep
title="Plan Your Meetings"
description="Select the most convSelect a convenient date and time for consultations with our dedicated pension experts, ensuring personalized plans for financial security."
/>

<SolutionStep
title="Receive Tailored Solutions"
description="Expert advice for secure futures: Tailored retirement plans to reach financial goals."
/>


      </div>
    </div>
  );
}

export default About;
