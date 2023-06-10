"use client";

import OurMembers from "../components/AboutUs/OurMembers/OurMembers";
import OurTactile from "../components/AboutUs/OurTactile/OurTactile";
import Title from "../components/AboutUs/Title/Title";
import Header from "../components/Header/Header";

export default function ContactUs() {
  return (
    <>
      <Header isTransparent={true} />
      <Title />
      <OurTactile />
      <OurMembers />
    </>
  );
}
