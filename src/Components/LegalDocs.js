import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          PensionBox
        </Link>
      </h1>

      <div className="legal-text-content">
  <p className="legal-title">General Info</p>
  <p className="legal-description">
    Welcome to PensionBox, your trusted digital pension platform. Our mission is to provide seamless and personalized retirement planning services to individuals seeking expert financial advice and solutions. By using our platform, you agree to the terms outlined in our Privacy Policy and Terms of Service.
  </p>

  <p className="legal-title">Privacy Policy</p>
  <p className="legal-description">
    Your privacy is our top priority. Our Privacy Policy details how we collect, use, and protect your personal and financial information. We ensure secure data handling, and your information is treated with utmost confidentiality.
  </p>

  <p className="legal-title">Terms of Service</p>
  <p className="legal-description">
    By using PensionBox, you agree to our Terms of Service, which include guidelines for using our platform, investment interactions, and responsibilities. It's essential to understand these terms for a smooth and secure experience.
  </p>

  <p className="legal-title">Consultations</p>
  <p className="legal-description">
    PensionBox connects you with expert advisors for personalized retirement consultations. These consultations complement traditional financial planning and offer convenience for managing your pension. It's important to provide accurate information for optimal guidance.
  </p>

  <p className="legal-title">How it Works</p>
  <p className="legal-description">
    PensionBox simplifies retirement planning. You can choose an advisor, schedule consultations, and receive tailored retirement plans. Please note that urgent financial matters should be directed to your local financial institution.
  </p>
</div>

<div className="legal-footer">
  <p>© 2021-2023 PensionBox. All rights reserved.</p>
</div>
    </div>
  );
}

export default LegalDocs;
