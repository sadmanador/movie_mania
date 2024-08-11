import { Movie } from "@/types/MovieTypes";
import Image from "next/image";
import React from "react";

const SingleSlide = ({ movie }: { movie: Movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="carousel-item cursor-pointer">
       <Image width={250} height={350} src={imageUrl} alt={movie.title} />
    </div>
  );
};

export default SingleSlide;
