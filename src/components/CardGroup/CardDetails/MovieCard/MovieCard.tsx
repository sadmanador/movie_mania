"use client";
import { Movie } from "@/types/MovieTypes";
import { Rating, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link
      href={`/${movie.id}`}
      className={`card bg-base-300 w-auto shadow-[0_4px_8px_0_rgba(0,0,0,0.3)] hover:shadow-[3px_4px_8px_2px_rgba(0,0,0,0.5)] hover:transition-all duration-300 cursor-pointer sm:hover:scale-[1.04] transition-transform ease-in-out`}
    >
      <figure>
        <Image width={300} height={300} src={imageUrl} alt={movie.title} />
      </figure>
      <div className="card-body py-2">
        <h2 className="card-title hover:text-yellow-500 text-lg">
          {movie.title.length >= 20 ? movie.title.slice(0, 20) + "..." : movie.title}
        </h2>

        <div className="card-actions justify-start">
          <div>
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
