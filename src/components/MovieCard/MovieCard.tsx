"use client";
import { BannerMovieContext } from "@/context/BannerContext";
import { Movie } from "@/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { detailsType,movieOrTv } = useContext(BannerMovieContext);
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  // Determine the href based on detailsType
  const href = movieOrTv === "tv" ? `/tv_shows/${movie.id}` : `/${movie.id}`;

  return (
    <Link
      href={href}
      className="card bg-slate-700 w-auto shadow-xl cursor-pointer sm:hover:scale-[1.04] transition-transform duration-200 ease-in"
    >
      <figure>
        <Image width={300} height={300} src={imageUrl} alt={movie.title} />
      </figure>
      <div className="card-body text-gray-300">
        <h2 className="card-title">{movie.title}</h2>
        <p>
          {movie.overview.slice(0, 40)}...
          <span className="underline italic">more</span>
        </p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">
            Release Date:{" "}
            <span className="text-[12px] italic ml-2">
              {movie.release_date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
