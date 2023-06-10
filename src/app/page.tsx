"use client";

import OriginStandard from "./components/HomePage/OriginStandard/OriginStandard";
import OurMission from "./components/HomePage/OurMission/OurMission";
import OurCatalog from "./components/HomePage/OurCatalog/OurCatalog";
import Title from "./components/HomePage/Title/Title";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <Header isTransparent={false} />
      <Title />
      <OriginStandard />
      <OurMission />
      <OurCatalog />
    </>
  );
}
