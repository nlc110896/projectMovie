import React from "react";
import Header from "../Components/Header/index";
import Carousel from "../Components/Carousel/index";
import Bookingbar from "../Components/Bookingbar/index";
import MovieTab from "../Components/Movietab/index";
import Cinemas from "../Components/Cinemas/index";
import ReviewCinema from "../Components/Review/index";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <Bookingbar />
      <MovieTab />
      <Cinemas />
      <ReviewCinema />
    </div>
  );
}
