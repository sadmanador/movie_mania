import { BannerMovieContext } from "@/context/BannerContext";
import { useContext, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";
import TVshowCard from "../TVCard/TVCard";

interface CardGroupProps {
  streamingType: string;
  activeTab: string;
}

const CardGroup: React.FC<CardGroupProps> = ({ streamingType, activeTab }) => {
  const { movies, setMovieOrTv, setTrendingOptions } =
    useContext(BannerMovieContext);

  useEffect(() => {
    console.log(`Setting movieOrTv to ${streamingType}`);
    setMovieOrTv(streamingType);
  }, [streamingType, setMovieOrTv]);

  setTrendingOptions(activeTab);

  return (
    <>
      <Pagination />
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:mx-14 mx-4">
        {movies.map((movie, index) =>
          streamingType == "movie" ? (
            <MovieCard key={index} movie={movie} />
          ) : (
            <TVshowCard key={index} movie={movie} />
          )
        )}
      </div>
      <Pagination />
    </>
  );
};

export default CardGroup;
