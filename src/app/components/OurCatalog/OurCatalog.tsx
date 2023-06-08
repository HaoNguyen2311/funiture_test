import TabList from "./TabList/TabList";

import MainImage from "@public/OurCatalog/our_catalog_image.png";

import "./OurCatalog.scss";
import Image from "next/image";

const TabItems = () => {
  return (
    <div className="our-catalog-section">
      <div className="title-section">
        <h2>
          <span>ELEGANCE IN DESIGN</span> <p>CURATED</p> FOR YOU
        </h2>
        <p className="title-text">
          Our catalog of furniture is carefully curated to strike a balance
          between selection and variation. It combines flowing curves, bold
          angles and striking surfaces to provide the ideal canvas for your
          ideas and creativity to shine. We understand the profound impact form,
          material and color can have on the overall look and feel of your
          space, which is why we provide a range of options to suit your needs.
        </p>
        <p className="checkout-text">CHECK OUR</p>
        <div className="line"></div>
        <div className="image-section">
          <div>
            <h3>NEW COLLECTION</h3>
          </div>
          <Image src={MainImage} alt="New Collection Image" />
        </div>
      </div>

      <TabList />
    </div>
  );
};

export default TabItems;
