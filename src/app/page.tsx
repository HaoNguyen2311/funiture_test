"use client";

import OriginStandard from "./components/HomePage/OriginStandard/OriginStandard";
import OurMission from "./components/HomePage/OurMission/OurMission";
import OurCatalog from "./components/HomePage/OurCatalog/OurCatalog";
import Title from "./components/HomePage/Title/Title";

export default function Home() {
  return (
    <div>
      <Title />
      <OriginStandard />
      <OurMission />
      <OurCatalog />
    </div>
  );
}
