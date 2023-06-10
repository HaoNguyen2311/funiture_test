"use client";

import Image from "next/image";

import PhoneImage from "@public/phone.svg";
import LogoImage from "@public/logo_image_black.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="info-section">
          <div className="download-section">
            <p>
              <span>See for yourself.</span> Download our full catalog for a
              full look at our products and collections.
            </p>
            <button>
              <p>DOWNLOAD CATALOG</p>
            </button>
          </div>
          <div className="contact-section">
            <div className="common-row">
              <Image src={PhoneImage} alt="Phone image" />
              <p>+848-3-123-999</p>
            </div>
            <div className="common-row">
              <Image src={PhoneImage} alt="Phone image" />

              <p>+848-3-321-999</p>
            </div>
          </div>
        </div>
        <div className="logo-rights">
          <Image src={LogoImage} alt="Logo image" />
          <p>© 2023 GRANFORD. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
