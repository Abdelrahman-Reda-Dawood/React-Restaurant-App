import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CategoryCard from "./ui/category-card";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3500, min: 2000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CategoryGallery = () => {
  return (
    <section>
      <h1 className="font-semibold text-xl mb-2">Our Categories</h1>
      <Carousel
        className="bg-orange-200 rounded-md py-3 items-center px-2"
        additionalTransfrom={0}
        minimumTouchDrag={80}
        autoPlaySpeed={3000}
        arrows
        draggable
        keyBoardControl
        pauseOnHover
        centerMode={false}
        infinite
        focusOnSelect={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        showDots={false}
        shouldResetAutoplay
        slidesToSlide={2}
        swipeable
        responsive={responsive}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Carousel>
    </section>
  );
};

export default CategoryGallery;
