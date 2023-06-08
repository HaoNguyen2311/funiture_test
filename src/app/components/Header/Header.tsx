"use client";
import Image from "next/image";
import { Button, Drawer } from "antd";
import { useState } from "react";
import {
  AlignRightOutlined,
  CloseOutlined,
  PhoneFilled,
} from "@ant-design/icons";

import LogoImage from "@public/logo_image.svg";

import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="header-section">
      <div className="container">
        <Image className="logo-image" src={LogoImage} alt="Logo Image" />
        <div className="navigate-section">
          <a href="">ABOUT US</a>
          <a href="">CONTACT US</a>
          <a href="">DOWNLOAD CATALOG</a>
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
            <a href="">ABOUT US</a>
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
