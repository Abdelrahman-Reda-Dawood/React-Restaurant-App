import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  GetSubCategories,
  GetSubCategoriesWithId,
} from "../actions/get-subcategories";
import SubcategoryCard from "./ui/subcategory-card";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3500, min: 1536 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 5,
  },
  smallTablet: {
    breakpoint: { max: 640, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const SubcategoryList = ({ selected_Category, subcategoryFilter }) => {
  const [subcategories, setSubcategories] = useState([]);
  const [selected, setSelected] = useState(false);

  if (selected_Category == null) {
    GetSubCategories({ setSubcategories: setSubcategories });
  } else {
    GetSubCategoriesWithId({
      setSubcategories: setSubcategories,
      id: selected_Category,
    });
  }

  function handleOnClick(subcategoryId) {
    if (selected == subcategoryId) {
      setSelected(null);
    } else setSelected(subcategoryId);
  }

  const subcategoryList =
    subcategories && subcategories.data && subcategories.data.length > 0 ? (
      subcategories.data.map((subcategory, index) => (
        <div
          className="w-fit"
          onClick={() => {
            subcategoryFilter(subcategory._id);
          }}
          key={index}>
          <SubcategoryCard
            {...subcategory}
            onClick={() => handleOnClick(subcategory._id)}
            selected={selected_Category && selected === subcategory._id}
          />
        </div>
      ))
    ) : (
      <div className="py-2 flex text-nowrap md:text-base xs:text-xs">
        No Subcategory Found
      </div>
    );

  return (
    <section className="shadow-sm flex flex-col text-white mb-2">
      {subcategories.data ? (
        <Carousel
          className="flex flex-row rounded-lg bg-white/10 p-2 mx-3"
          slidesToSlide={1}
          additionalTransfrom={0}
          minimumTouchDrag={80}
          arrows={false}
          infinite
          draggable
          rewind
          responsive={responsive}>
          {subcategoryList}
        </Carousel>
      ) : (
        // <div className="flex flex-row justify-start gap-3 rounded bg-[#000000]/20 px-2 py-1">
        //   {subcategoryList}
        // </div>
        <div className="self-center text-base text-center">Loading...</div>
      )}
    </section>
  );
};

export default SubcategoryList;
