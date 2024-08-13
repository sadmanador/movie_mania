import { Movie } from "@/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link
      href={`/${movie.id}`}
      className="card bg-base-300 w-auto shadow-xl cursor-pointer sm:hover:scale-[1.04] transition-transform duration-200 ease-in"
    >
      <figure>
        <Image width={300} height={300} src={imageUrl} alt={movie.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p>{movie.overview.slice(0, 40)}...<span className="underline italic">more</span></p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">Release Date:  <span className="text-[12px] italic ml-2">{movie.release_date}</span></div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
