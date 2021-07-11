import React from "react";
import { PersonHeader } from "./PersonHeader";
import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "./Carousel";

export const TransactionHistory = () => {
  return (
    <div className="text-white bg-dark min-h-screen border-l-2 border-darker">
      <div className="bg-darker px-2 py-1">
        <PersonHeader
          name="Lorem ipsum"
          amount="100"
          email="lorem@ipsum.com"
          text="You will get"
        />
      </div>

      <Carousel />
    </div>
  );
};
