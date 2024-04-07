import React from "react";
import InformationCard from "./InformationCard";
import { faHandHoldingDollar, faFileInvoiceDollar, faCommentDollar } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        PensionBox is India's premier digital pension platform, revolutionizing retirement planning with seamless management, 
        investment tracking, and streamlined withdrawals. Empower your financial future with PensionBox's secure, convenient,
        and comprehensive solutions, designed to optimize your retirement journey.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Retirement planning"
          description="Retirement Planning: Our expert advisors guide you through comprehensive retirement planning strategies,
           ensuring a financially secure and fulfilling future."
          icon={faHandHoldingDollar}
        />

        <InformationCard
          title="Pension Management"
          description="With PensionBox, 
          streamline your pension funds effortlessly, track performance, and make informed decisions for optimized growth and stability."
          icon={faFileInvoiceDollar}
        />

        <InformationCard
          title="Investment Advisory"
          description="Benefit from personalized investment advice tailored to your goals, 
          risk tolerance, and timeline, empowering you to make sound financial choices for your retirement."
          icon={faCommentDollar}
        />
      </div>
    </div>
  );
}

export default Info;
