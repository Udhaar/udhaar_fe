import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { PendingTransactionCard } from "./PendingTransactionCard";

const responsive = {
  568: { items: 1 },
  1024: { items: 1 },
};

const items = [
  <PendingTransactionCard
    amount="100"
    description="lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum"
  />,
  <PendingTransactionCard
    amount="150"
    description="lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum"
  />,
  <PendingTransactionCard
    amount="200"
    description="lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum"
  />,
  <PendingTransactionCard
    amount="160"
    description="lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum"
  />,
];
const total = items.length;

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () =>
    setActiveIndex(activeIndex === 0 ? 0 : activeIndex - 1);
  const slideNext = () =>
    setActiveIndex(activeIndex === total ? total : activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  return (
    <div className="flex justify-between mx-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={slidePrev}
        className="cursor-pointer w-16 block"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>

      <div className="w-5/6 text-center">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={slideNext}
        className="cursor-pointer w-16"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};