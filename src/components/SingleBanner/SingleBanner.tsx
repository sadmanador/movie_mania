import { Movie } from "@/types/MovieTypes";
import Image from "next/image";
import React from "react";
// Adjust the path to your Movie type

interface SingleBannerProps {
  movie: Movie;
  currentItem: number;
  itemIndex: number;
}

const SingleBanner: React.FC<SingleBannerProps> = ({
  movie,
  currentItem,
  itemIndex,
}) => {
  // Construct the image URL using the movie's poster path
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const backDropImg = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div
      id={`item${itemIndex}`}
      className={`carousel-item relative w-full ${
        currentItem === itemIndex ? "block" : "hidden"
      }`}
    >
      <img
        className="object-center lg:max-h-[65vh] max-h-screen w-full object-cover"
        src={backDropImg}
        alt={movie.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-10 left-10 flex lg:gap-16 sm:gap-8 gap-4 ">
        <div>
          <Image
            className="w-24 lg:w-64"
            width={250}
            height={200}
            src={imageUrl}
            alt={movie.title}
          />
        </div>
        <div className="self-end">
          <h2 className="lg:text-5xl md:text-4x sm:text-3xl text-2x text-white">
            {movie.title}
          </h2>
          <p className="lg:mt-4 text-stone-400 text-wrap min-w-40 hidden lg:block">
            {movie.overview}
          </p>
          <p className="mt-4 text-stone-400">Vote: {movie.vote_count}</p>
          <p className="mt-4 text-stone-400">Rating: {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBanner;
