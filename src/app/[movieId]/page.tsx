"use client";
import SimilarMovieGroup from "@/components/SimilarMovieGroup/SimilarMovieGroup";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { Rating, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SingleMoviePage = () => {
  const [movie, setMovie] = useState<any>(null);
  const [youtubeData, setYoutubeData] = useState<any>(null);
  const pathname = usePathname();
  const pathWithoutSlash = pathname?.replace(/^\/+/, "");
  const numericMovieId = Number(pathWithoutSlash);

  const imageUrl = movie
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";
  const backDropImg = movie
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await fetch(
          `${"https://api.themoviedb.org/3"}/movie/${numericMovieId}?api_key=${"c7cf1258a5aa723e8a98f08f639e86b6"}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchMovieData();
  }, [numericMovieId]);

  // Fetch YouTube data
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await fetch(
          `${"https://api.themoviedb.org/3"}/movie/${numericMovieId}/videos?api_key=${"c7cf1258a5aa723e8a98f08f639e86b6"}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setYoutubeData(data.results.slice(0, 6));
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchMovieData();
  }, [numericMovieId]);

  const genreNames = movie?.genres
    .map((genre: { name: string }) => genre.name)
    .join(", ");

  return (
    <div>
      {movie ? (
        <>
          <div className="relative">
            <img
              className="object-center lg:max-h-[75vh] max-h-screen w-full object-cover"
              src={backDropImg}
              alt={movie.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-10 left-10 flex lg:gap-16 sm:gap-8 gap-4 ">
              <div>
                <Image
                  className="w-24 lg:w-64"
                  width={250}
                  height={200}
                  src={imageUrl}
                  alt={movie.title}
                />
              </div>
              <div className="self-end">
                <h2 className="lg:text-5xl md:text-4x sm:text-3xl text-2x text-white">
                  {movie.title}
                </h2>
                <p className="lg:mt-4 text-stone-400 text-wrap min-w-40 hidden lg:block">
                  {movie.overview}
                </p>
                <p className="mt-4 text-stone-400">Vote: {movie.vote_count}</p>
                <p className="mt-4 text-stone-400">
                   <Typography component="legend">Total votes: {movie.vote_count}</Typography>
                  <Rating name="read-only" readOnly value={movie.vote_average /2} precision={.5} max={5} />
                </p>
                <p className="mt-4 text-stone-400">
                  Genres:{" "}
                  <div className="">
                    {<div className="badge badge-outline rounded-lg">{genreNames}</div>}
                  </div>{" "}
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl text-yellow-500 font-bold ml-16 my-8">
            Movie Trailers
          </h2>
          <div className="flex flex-wrap gap-4 lg:mx-14 m-8 justify-center">
            {youtubeData && youtubeData.length > 0 ? (
              youtubeData.map((video: any, index: number) => (
                <VideoPlayer key={index} video={video} />
              ))
            ) : (
              <p>No trailer videos available</p>
            )}
          </div>

          {/* Render SimilarMovieGroup component */}

          <h2 className="text-2xl text-yellow-500 font-bold ml-16 mb-8">
            Similar Movies
          </h2>
          <SimilarMovieGroup mediaType={"movie"} movieId={numericMovieId.toString()} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleMoviePage;
