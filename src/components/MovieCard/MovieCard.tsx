import { Movie } from "@/types/MovieTypes";
import Image from "next/image";
import Link from "next/link";

  
  const MovieCard = ({ movie }: { movie: Movie }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
      <Link href={`/${movie.id}`} className="card bg-base-100 w-auto shadow-xl cursor-pointer">
        <figure>
        <Image width={300} height={300} src={imageUrl} alt={movie.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {movie.title}
          </h2>
          <p>{movie.overview.slice(0,40)}...</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">Release Date:</div>
            <p>{movie.release_date}</p>
          </div>
        </div>
      </Link>
    );
  };
  
  export default MovieCard;
  