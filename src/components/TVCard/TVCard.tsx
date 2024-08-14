"use client";
import { TVShow } from "@/types/TvShowsTypes";
import { Rating, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "./TVCard.css"

const TVshowCard = ({ movie }: { movie: TVShow }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie);

  return (
    <Link
      href={`/tv_shows/${movie.id}`}
      className="tv-card relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow cursor-pointer sm:hover:scale-[1.04] transition-transform duration-200 ease-in"
    >
      <div>
        <img src={imageUrl} className="w-full object-cover" alt={movie.name} />
      </div>
      <div className="absolute inset-0 z-10 hover:bg-gradient-to-t from-black via-transparent to-black">
        <div className="flex justify-between items-center p-4 rating-bar">
          <small className="text-xs">Total votes: {movie.vote_count}</small>
          <Rating
            name="read-only"
            readOnly
            size="small"
            value={movie.vote_average / 2}
            precision={0.5}
            max={5}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 p-4 tvShow-info">
        <p className="mb-1 text-sm text-white text-opacity-80">
          {movie.origin_country} • <time>{movie.first_air_date}</time>
        </p>
        <h3 className="text-xl font-medium text-white">{movie.name}</h3>
        <p className="mt-1 text-white text-opacity-80">
          {movie.overview.slice(0, 45)}
        </p>
      </div>
    </Link>
  );
};

export default TVshowCard;
