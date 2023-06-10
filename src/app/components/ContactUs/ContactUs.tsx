import Image from "next/image";
import "./ContactUs.scss";

import ArrowImage from "@public/arrow-narrow-right.svg";

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className="title-section">
        <h2>
          <span>ELEVATE</span> YOUR LIVING SPACE
        </h2>
        <p>
          Whether you&apos;re looking for a sleek modern aesthetic, or something
          more traditional, we&apos;ve got you covered. Get in touch today to
          see how we can help transform your new space.
        </p>
      </div>
      <div className="form-section">
        <div className="line"></div>
        <input placeholder="ENTER YOUR EMAIL" type="text" />
        <div className="line"></div>
        <button className="submit-btn">
          <p>JOIN OUR VIP LIST</p>
          <Image src={ArrowImage} alt="Arrow Image" />
        </button>
        <div className="line"></div>
        <p className="discount-text">
          *Discount only for first time subscribers.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
