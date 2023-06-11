"use client";
import Image from "next/image";
import { Button, Drawer } from "antd";
import { useEffect, useState } from "react";
import {
  AlignRightOutlined,
  CloseOutlined,
  PhoneFilled,
} from "@ant-design/icons";

import LogoImage from "@public/logo_image.svg";
import LogoImageBlack from "@public/logo_image_black.svg";

import "./Header.scss";
import Link from "next/link";

const debounce = (func: () => void, delay: number) => {
  let timeoutId: undefined | ReturnType<typeof setTimeout> = undefined;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
};

const Header = ({ isTransparent }: { isTransparent: boolean }) => {
  const [open, setOpen] = useState(false);
  const [isChangeHeader, setIsChangeHeader] = useState(isTransparent);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const secondParagraph = document.getElementById("title");
      const rect = secondParagraph?.getBoundingClientRect();

      if (rect && rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsChangeHeader(false);
      } else {
        setIsChangeHeader(true);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-section ${isChangeHeader ? "white-header" : ""}`}>
      <div className="container">
        {isChangeHeader ? (
          <Link href=".">
            <Image
              className="logo-image"
              src={LogoImageBlack}
              alt="Logo Image"
            />
          </Link>
        ) : (
          <Link href=".">
            <Image className="logo-image" src={LogoImage} alt="Logo Image" />
          </Link>
        )}
        <div className="navigate-section">
          <Link href="/about-us">ABOUT US</Link>
          <Link href="">CONTACT US</Link>
          <Link href="">DOWNLOAD CATALOG</Link>
        </div>
        <Button className="menu-btn" type="text" onClick={showDrawer}>
          <AlignRightOutlined />
        </Button>
        <Drawer
          className="drawer-homepage"
          closeIcon={
            <div className="drawer-close-icon">
              <p>CLOSE</p>
              <CloseOutlined />
            </div>
          }
          title={
            <Image className="logo-image" src={LogoImage} alt="Logo Image" />
          }
          placement="right"
          onClose={onClose}
          open={open}
          width={"100%"}
        >
          <div className="navigate-section">
            <a href="/about-us">ABOUT US</a>
            <a href="">CONTACT US</a>
            <a href="">DOWNLOAD CATALOG</a>
          </div>
          <div className="contact-rights-section">
            <div className="contact-section">
              <div className="common-row">
                <PhoneFilled />
                <p>+848-3-123-999</p>
              </div>
              <div className="common-row">
                <PhoneFilled />
                <p>+848-3-321-999</p>
              </div>
            </div>
            <p className="rights">© GRANFORD 2023. All Rights Reserved.</p>
          </div>
        </Drawer>
      </div>
    </div>
  );
};
export default Header;
