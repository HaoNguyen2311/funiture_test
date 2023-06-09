import Image from "next/image";

import SofaImage from "@public/OurMission/sofa_our_mission.png";

import "./OurMission.scss";

const OurMission = () => {
  return (
    <div className="our-mission-section">
      <div className="container">
        <h2>
          <p>THE DETAILS</p>
          MAKE ALL THE
          <br />
          <span>DIFFERENCE</span>
        </h2>
        <div className="details">
          <p className="our-gold">
            Our goal is to ensure that every aspect of the design is thought out
            and perfectly executed, resulting in a finished product that you can
            be proud of.
          </p>
          <Image src={SofaImage} alt="Sofa Image" />
          <p className="our-approach">
            Our approach is designed to provide a tactile experience that
            engages both your sense of sight and touch. Using our unique design
            approach, we strive to bring you closer to the feeling you have been
            working to create.
          </p>
          <p className="our-gold-mobile">
            Our goal is to ensure that every aspect of the design is thought out
            and perfectly executed, resulting in a finished product that you can
            be proud of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
