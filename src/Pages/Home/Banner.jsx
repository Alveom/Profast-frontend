import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/banner/banner1.png";
import image2 from "../../assets/banner/banner2.png";
import image3 from "../../assets/banner/banner3.png";

function Banner() {
  return (
    <div className="mt-10 mb-10">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
