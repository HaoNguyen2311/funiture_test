"use client";

import OriginStandard from "./components/OriginStandard/OriginStandard";
import OurMission from "./components/OurMission/OurMission";
import OurCatalog from "./components/OurCatalog/OurCatalog";
import Title from "./components/Title/Title";

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
