import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import Image from "next/image";

import BedRoomImage from "@public/Title/bed_room_image.png";
import SofaImage from "@public/Title/sofa_image.png";
import ReadingImage from "@public/Title/reading_room.png";

import "./Title.scss";

const IMAGE_LIST = [SofaImage, BedRoomImage, ReadingImage];
const PERCENT_ELEMENT = 100 / IMAGE_LIST.length;

const Title = () => {
  const [width, setWidth] = useState(PERCENT_ELEMENT);

  const settings = {
    dots: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightOutlined />,
    prevArrow: <LeftOutlined />,
    fade: true,
    autoplay: true,
    cssEase: "cubic-bezier(0.23, 1, 0.32, 1)",
    beforeChange: function (oldIndex: number, newIndex: number) {
      if (oldIndex === IMAGE_LIST.length - 1 && newIndex === 0) {
        setWidth(PERCENT_ELEMENT);
        return;
      }
      if (oldIndex === 0 && newIndex === IMAGE_LIST.length - 1) {
        setWidth(100);
        return;
      }
      setWidth(width + PERCENT_ELEMENT);
    },
  };

  const progressBarStyle = {
    "--width": `${width}%`,
  } as React.CSSProperties;

  return (
    <div className="title-contact-us">
      <div className="content">
        <h2>
          <span>DISCOVER GRANFORD</span> <br />
          ABOUT <span className="italic-text">US</span>
        </h2>
        <p>
          Introducing Granford, a furniture company whose history is rooted in
          American service and quality standards. And while our team is
          dedicated to practicing those standards, our heritage is only the
          beginning of our journey.
        </p>
      </div>
      <div className="slider-section">
        <div className="sub-image">
          <div className="step-bar">
            <p>01</p>
            <div className="progress-bar">
              <div style={progressBarStyle}></div>
            </div>
            <p>
              {IMAGE_LIST.length < 10
                ? `0${IMAGE_LIST.length}`
                : IMAGE_LIST.length}
            </p>
          </div>
        </div>
        <Slider className="slider-title" {...settings}>
          {IMAGE_LIST.map((image, index) => (
            <Image
              key={index}
              className="slider-image"
              alt="Image"
              src={image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Title;
