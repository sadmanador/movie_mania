"use client";
import { Movie } from "@/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";

const SearchResultCard = ({ movie }: { movie: Movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link href={`/${movie.id}`} className="my-3 flex gap-2 cursor-pointer hover:border transform:border">
      <div>
        <Image width={60} height={100} src={imageUrl} alt={movie.title} />
      </div>
      <div className="">
        <h2 className="">{movie.title}</h2>
        <p>
          {movie.overview.slice(0, 40)}...
          <span className="underline italic">more</span>
        </p>
        <div className="justify-start">
          <div className="">
            Release Date:{" "}
            <span className="text-[10px] italic ml-2">
              {movie.release_date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
