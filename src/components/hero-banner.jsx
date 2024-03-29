import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { heroSlides } from "../utils/constants";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
  },
};

const HeroBanner = () => {
  return (
    <div className="self-center w-full pt-1">
      <Carousel
        additionalTransfrom={0}
        autoPlay
        arrows={false}
        autoPlaySpeed={4000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass="si"
        draggable={false}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        slidesToSlide={1}
        swipeable>
        {heroSlides.map((slide, slideIndex) => (
          <img
            key={slideIndex}
            src={heroSlides[slideIndex]}
            alt="banner-img"
            className="pb-6 rounded-md md:h-[80vh] w-full"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
