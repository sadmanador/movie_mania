import { BannerMovieContext } from "@/context/BannerContext";
import React, { useContext } from "react";
import SingleSlide from "../SingleSlide/SingleSlide";

const Slider = () => {
  const { movies, loading, error } = useContext(BannerMovieContext);

  return (
    <div className="my-10">
      <div className="carousel carousel-end rounded-box">
        {movies.map((movie, index) => {
          return <SingleSlide key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
