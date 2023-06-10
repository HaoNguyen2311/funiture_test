import { Tabs } from "antd";
import Image from "next/image";
import Slider from "react-slick";
import { useRef, useState } from "react";

import ChairImage from "@public/OurCatalog/chair.png";
import ChairBlurImage from "@public/OurCatalog/chair_blur.png";
import SofaImage from "@public/OurCatalog/sofa.png";
import SofaBlurImage from "@public/OurCatalog/sofa_blur.png";
import StoolImage from "@public/OurCatalog/stool.png";
import StoolBlurImage from "@public/OurCatalog/stool_blur.png";
import PencilImage from "@public/OurCatalog/pencil.svg";
import SwatchImage from "@public/OurCatalog/color-swatch.svg";
import LeftArrow from "@public/left_arrow.svg";
import RightArrow from "@public/right_arrow.svg";

import "./TabList.scss";

const IMAGE_LIST = [SofaImage, StoolImage, ChairImage];
const BLUR_IMAGE_LIST = [SofaBlurImage, StoolBlurImage, ChairBlurImage];

const TAB_LIST = [
  { label: "CHAIRS", id: "1" },
  { label: "SOFAS", id: "2" },
  { label: "BEDS", id: "3" },
];

const TabList = () => {
  const [leftImageIndex, setLeftImageIndex] = useState(
    BLUR_IMAGE_LIST.length - 1
  );
  const [rightImageIndex, setRightImageIndex] = useState(1);

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Image src={RightArrow} alt="Right Arrow Image" />,
    prevArrow: <Image src={LeftArrow} alt="Left Arrow Image" />,
    fade: true,
    cssEase: "cubic-bezier(0.23, 1, 0.32, 1)",
    beforeChange: function (oldIndex: number, newIndex: number) {
      if (newIndex + 1 > BLUR_IMAGE_LIST.length - 1) {
        setRightImageIndex(0);
        setLeftImageIndex(newIndex - 1);
        return;
      }
      if (newIndex - 1 < 0) {
        setRightImageIndex(newIndex + 1);
        setLeftImageIndex(BLUR_IMAGE_LIST.length - 1);
        return;
      }
      setLeftImageIndex(newIndex - 1);
      setRightImageIndex(newIndex + 1);
    },
  };

  const handleGoNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleGoPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const children = (
    <>
      <div className="tab-content">
        <div className="left-image">
          <Image alt="Image" src={BLUR_IMAGE_LIST[leftImageIndex]} />
        </div>
        <Slider ref={sliderRef} className="slider-tab-items" {...settings}>
          {IMAGE_LIST.map((image, index) => (
            <Image
              key={index}
              className="slider-image"
              alt="Image"
              src={image}
            />
          ))}
        </Slider>
        <div className="right-image">
          <Image alt="Image" src={BLUR_IMAGE_LIST[rightImageIndex]} />
        </div>
      </div>
      <div className="description">
        <div className="line"></div>
        <p className="text-info">
          Made of 35x10 mm steel plate, Black-Nickel finish. Black protective
          SEBS glides.
        </p>
        <div className="line"></div>
        <div className="size-material">
          <button onClick={handleGoPrev} className="left-arrow">
            <Image src={LeftArrow} alt="Right Arrow Image" />
          </button>
          <button onClick={handleGoNext} className="right-arrow">
            <Image src={RightArrow} alt="Right Arrow Image" />
          </button>
          <div className="common-row">
            <Image src={PencilImage} alt="Pencil Image" />
            <p>99x107x107 cm</p>
          </div>
          <div className="common-row">
            <Image src={SwatchImage} alt="Swatch Image" />
            <p>Metal, fabric, leather</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Tabs
        className="tab-our-catalog"
        defaultActiveKey="1"
        centered
        items={TAB_LIST.map((tab, i) => {
          return {
            label: tab.label,
            key: tab.id,
            children: children,
          };
        })}
      />
    </div>
  );
};

export default TabList;
