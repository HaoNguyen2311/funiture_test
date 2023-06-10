import CeoImage from "@public/AboutUs/CEO_image.png";
import CcoImage from "@public/AboutUs/CCO_image.png";
import CtoImage from "@public/AboutUs/CTO_image.png";
import SaleImage from "@public/AboutUs/sale_image.jpg";
import BusinessImage from "@public/AboutUs/business_image.png";

import "./OurMembers.scss";
import Image from "next/image";

const MEMBER_LIST = [
  {
    name: "STEPHANIE CRESPIN",
    position: "CEO / CO-FOUNDER",
    img: CeoImage,
  },
  {
    name: "PHILIPPE BENEDELTI",
    position: "CTO / CO-FOUNDER",
    img: CtoImage,
  },
  {
    name: "VENESSA CHEUNG",
    position: "CCO / CO-FOUNDER",
    img: CcoImage,
  },
  {
    name: "TRAN DK",
    position: "BUSINESS",
    img: BusinessImage,
  },
  {
    name: "PAUL WONG",
    position: "SALE",
    img: SaleImage,
  },
];

const OurMembers = () => {
  return (
    <div className="our-member-section">
      {MEMBER_LIST.map((member, index) => {
        return (
          <div className="common-col" key={index}>
            <div className="line"></div>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <Image src={member.img} alt={`${member.position} Image`} />
          </div>
        );
      })}
    </div>
  );
};

export default OurMembers;
