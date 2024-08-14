"use client";
import { Movie } from "@/types/MovieTypes";
import { Rating, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


  return (
    <Link
      href={`/${movie.id}`}
      className="card bg-slate-700 w-auto shadow-xl cursor-pointer sm:hover:scale-[1.04] transition-transform duration-200 ease-in"
    >
      <figure>
        <Image width={300} height={300} src={imageUrl} alt={movie.title} />
      </figure>
      <div className="card-body text-gray-300">
        <h2 className="card-title text-gray-100">{movie.title}</h2>
        <p>
          {movie.overview.slice(0, 40)}...
          <span className="underline italic">more</span>
        </p>
        <div className="card-actions justify-start">
          <div>
            <p>
              <Typography component="legend">
                Total votes: {movie.vote_count}
              </Typography>
              <Rating
                name="read-only"
                readOnly
                value={movie.vote_average / 2}
                precision={0.5}
                max={5}
              />
            </p>
          </div>
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
