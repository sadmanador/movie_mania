import { BannerMovieContext } from "@/context/BannerContext";
import React, { useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";

const CardGroup = () => {
  const { movies, loading, error } = useContext(BannerMovieContext);

  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:mx-14 mx-4">

    {movies.map((movie, index) => {
      return <MovieCard key={index} movie={movie}/>
    }
    )}
    </div>
  );
};

export default CardGroup;
