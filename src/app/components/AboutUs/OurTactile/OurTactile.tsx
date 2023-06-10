import Image from "next/image";

import SofaImage from "@public/AboutUs/sofa_about_us.png";

import "./OurTactile.scss";

const OurTactile = () => {
  return (
    <div className="our-tactile-section">
      <h3>OUR TACTILE APPROACH</h3>
      <div className="common-row our-approach">
        <div className="left-paragraph">
          <p>
            We have a deep understanding of our customers&apos; needs and
            concerns, and have designed a process that takes each step into
            account. Our goal is to ensure that every aspect of the design is
            carefully planned and executed, with samples, materials and insights
            close at hand, so you&apos;ll have everything you need to move
            forward with confidence.
          </p>
        </div>
        <div className="right-paragraph">
          <p>
            Our craftsmen are knowledgeable about changing design trends, and
            our goal is to stay up-to-date with new styles and themes.
            Additionally, we always maintain respect and appreciation for
            classic design in our catalog. At Granford, we strive to embrace the
            new while also honoring the past.
          </p>
          <p>
            We are your partners in design and are committed to the realization
            of your vision. Reaching the end of the project, we have streamlined
            the finalization process and assembled the ideal after-care package
            to ensure your piece gets the care it deserves.
          </p>
        </div>
      </div>
      <div className="common-row image-section">
        <div className="left-paragraph">
          <div className="line"></div>
        </div>
        <div className="right-paragraph">
          <Image src={SofaImage} alt="Sofa Image" />
        </div>
      </div>

      <div className="common-row our-leadership">
        <div className="left-paragraph">
          <p>
            Our leadership team is highly qualified and experienced in design,
            logistics, and service. They have a deep understanding of the
            industry and are passionate about delivering the best possible
            results to our customers.
          </p>
        </div>
        <div className="right-paragraph">
          <h4>
            LEADING <span>THE WAY</span>
          </h4>
          <p>TALENTED DRIVEN INSIGHTFUL</p>
        </div>
      </div>
    </div>
  );
};

export default OurTactile;
