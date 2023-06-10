"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import BedRoomImage from "@public/Title/bed_room_image.png";
import SofaImage from "@public/Title/sofa_image.png";
import ReadingImage from "@public/Title/reading_room.png";

import "./Title.scss";

const IMAGE_LIST = [SofaImage, BedRoomImage, ReadingImage];
const PERCENT_ELEMENT = 100 / IMAGE_LIST.length;

const Title = () => {
  const [width, setWidth] = useState(PERCENT_ELEMENT);
  const [indexSubImage, setIndexSubImage] = useState(0);

  const settings = {
    dots: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightOutlined />,
    prevArrow: <LeftOutlined />,
    fade: true,
    cssEase: "cubic-bezier(0.23, 1, 0.32, 1)",
    beforeChange: function (oldIndex: number, newIndex: number) {
      if (oldIndex === IMAGE_LIST.length - 1 && newIndex === 0) {
        setIndexSubImage(0);
        setWidth(PERCENT_ELEMENT);
        return;
      }
      if (oldIndex === 0 && newIndex === IMAGE_LIST.length - 1) {
        setIndexSubImage(IMAGE_LIST.length - 1);
        setWidth(100);
        return;
      }
      setIndexSubImage(newIndex);
      setWidth(width + PERCENT_ELEMENT);
    },
  };

  const progressBarStyle = {
    "--width": `${width}%`,
  } as React.CSSProperties;

  return (
    <div className="title-section" id="title">
      <div className="sub-image">
        <Image alt="Image" src={IMAGE_LIST[indexSubImage]} />
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
      <div className="description">
        <h1>
          REFINED FURNITURE <br />
          <span>REDEFINED</span>
        </h1>
        <button>
          <p>DISCOVER NOW</p>
        </button>
      </div>
      <Slider className="slider-tab-items" {...settings}>
        {IMAGE_LIST.map((image, index) => (
          <Image key={index} className="slider-image" alt="Image" src={image} />
        ))}
      </Slider>
    </div>
  );
};

export default Title;
