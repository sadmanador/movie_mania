import { BannerMovieContext } from "@/context/BannerContext";
import { useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";

const CardGroup = () => {
  const { movies } = useContext(BannerMovieContext);

  return (
    <>
      <h2 className="text-2xl text-yellow-500 font-bold ml-16 mb-8">
        Top Rated Movies
      </h2>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:mx-14 mx-4">
        {movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
      <Pagination />
    </>
  );
};

export default CardGroup;
