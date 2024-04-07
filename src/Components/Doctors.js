import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Investors</span>
        </h3>

        <p className="dt-description">
        Our investors are strategic partners fueling PensionBox's innovation in retirement planning.
        With their support, we offer seamless pension management and expert financial guidance, empowering 
        individuals to secure their futures confidently.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Zerodha"
          
        />
        <DoctorCard
          img={profile2}
          name="100x Vc"
        />
        <DoctorCard
          img={profile3}
          name="Sequoia"
        />
      </div>
    </div>
  );
}

export default Doctors;
