"use client";

import Image from "next/image";
import { Button } from "antd";

import ArrowIcon from "@public/OriginStandard/arrow-narrow-right.svg";
import SofaReadingRoomImage from "@public/OriginStandard/our-story.jpg";
import SofaStandard from "@public/OriginStandard/sofa_standard.png";

import "./OriginStandard.scss";

const OriginStandard = () => {
  return (
    <div className="origin-standard-section">
      <div className="origin">
        <div className="desc">
          <h2>
            CURATED FURNITURE THAT{" "}
            <span className="text-base-gray">ELEVATES</span>{" "}
            <span className="text-primary">& INSPIRES</span>
          </h2>
          <p>
            At Granford, we are passionate about creating quality furniture that
            is not only functional but also poetic and meaningful. Our designs
            aspire to enhance the ambience of any space, whether it&apos;s a
            sophisticated living room or a cozy bedroom. To achieve the highest
            expression of luxury, we carefully select the finest imported
            materials and attend to the finest detail in the design, production
            and delivery processes. <br /> <br /> In keeping to Granford&apos;s
            ethos of excellence since 2016, our curated collection represents
            our commitment to our customers desires for a beautiful home and
            thus becomes a reflection of their personality and style.
          </p>
          <Button>
            OUR STORY
            <Image alt="Arrow Image" src={ArrowIcon} />
          </Button>
        </div>
        <Image
          className="sofa-standard"
          src={SofaReadingRoomImage}
          alt="Sofa Image"
        />
      </div>
      <div className="standard">
        <div className="desc">
          <h2>
            A NEW STANDARD <span className="text-primary">IN EXCELLENT</span>
          </h2>
          <p>
            Our dedication to excellence is a core value at Granford. We strive
            to not only meet, but exceed expectations in every aspect of our
            business, from the selection of our products to the personalized
            attention we provide to each customer. Our team is committed to
            maintaining these high standards and continuously improving our
            processes to ensure that we are providing the best possible service.
          </p>
        </div>
        <Image className="sofa-standard" src={SofaStandard} alt="Sofa Image" />
      </div>
    </div>
  );
};

export default OriginStandard;
