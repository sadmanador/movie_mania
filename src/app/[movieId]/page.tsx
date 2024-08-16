"use client";
import SimilarMovieGroup from "@/components/SimilarMovieGroup/SimilarMovieGroup";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { Rating, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import noImage from "@/assets/no_image.jpg";
import noBanner from "@/assets/no_banner.png";
import Castings from "@/components/Castings/Castings";
import SceneGallery from "@/components/SceneGallery/SceneGallery";

const DetailedMoviePage = () => {
  const [movie, setMovie] = useState<any>(null);
  const [youtubeData, setYoutubeData] = useState<any>(null);
  const [credits, setCredits] = useState<any>(null); // For movie credits
  const [sceneImages, setSceneImages] = useState<any>(null); // For movie scene images
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // For the selected scene image
  const pathname = usePathname();
  const pathWithoutSlash = pathname?.replace(/^\/+/, "");
  const numericMovieId = Number(pathWithoutSlash);

  const imageUrl =
    movie && movie.poster_path
      ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}`
      : noImage;

  const backDropImg =
    movie && movie.backdrop_path
      ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
      : noBanner;

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

  useEffect(() => {
    const fetchYoutubeData = async () => {
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
    fetchYoutubeData();
  }, [numericMovieId]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const res = await fetch(
          `${"https://api.themoviedb.org/3"}/movie/${numericMovieId}/credits?api_key=${"c7cf1258a5aa723e8a98f08f639e86b6"}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setCredits(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchMovieCredits();
  }, [numericMovieId]);

  useEffect(() => {
    const fetchMovieImages = async () => {
      try {
        const res = await fetch(
          `${"https://api.themoviedb.org/3"}/movie/${numericMovieId}/images?api_key=${"c7cf1258a5aa723e8a98f08f639e86b6"}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setSceneImages(data.backdrops.slice(0, 6));
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchMovieImages();
  }, [numericMovieId]);

  const genreNames = movie?.genres
    .map((genre: { name: string }) => genre.name)
    .join(", ");

  // Filter out crew members who are not involved in Acting
  const featuredCrew = credits?.crew.filter((member: any) =>
    ["Director", "Producer", "Screenplay", "Writer"].includes(member.job)
  );

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
    const modal = document.getElementById("scene_modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="">
      {movie ? (
        <>
          <div className="relative">
            <Image
              width={1200}
              height={800}
              className="object-center lg:max-h-[75vh] h-[75vh] w-full object-cover"
              src={backDropImg}
              alt={movie.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-10 left-10 sm:flex lg:gap-16 sm:gap-8 gap-4 ">
              <div>
                <Image
                  className="w-24 lg:w-64 "
                  width={450}
                  height={400}
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
                <div className="md:flex md:gap-20">
                  <div>
                    <p className="mt-4 text-stone-400">
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
                    <p className="mt-4 text-stone-400">
                      Genres:{" "}
                      <div className="">
                        {
                          <div className="badge badge-outline rounded-lg">
                            {genreNames}
                          </div>
                        }
                      </div>{" "}
                    </p>
                  </div>
                  <div>
                    <p className="mt-4 text-stone-400">
                      <h2 className="lg:text-xl md:text-xl sm:text-xl text-md text-white font-semibold mb-4">
                        Featured Crew
                      </h2>
                    </p>
                    <div className="md:flex gap-6 justify-start">
                      {featuredCrew && featuredCrew.length > 0 ? (
                        featuredCrew
                          .slice(0, 4)
                          .map((member: any, index: number) => (
                            <div key={index} className="">
                              <div className="">
                                <p className="text-white text-center text-[14px]">
                                  {member.name}
                                </p>
                                <p className="text-gray-400 text-center text-[12px]">
                                  {member.job}
                                </p>
                              </div>
                            </div>
                          ))
                      ) : (
                        <p>No featured crew information available</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* cast part */}
          <h2 className="text-2xl text-yellow-500 font-bold ml-16 my-8">
            Cast
          </h2>
          <Castings cast={credits?.cast || []} />

          <h2 className="text-2xl text-yellow-500 font-bold ml-16 mb-8">
            Trailers
          </h2>
          <div className="flex flex-wrap gap-4 lg:mx-14 m-8 justify-center">
            {youtubeData && youtubeData.length > 0 ? (
              youtubeData.map((trailer: any, index: number) => (
                <VideoPlayer key={index} video={trailer} />
              ))
            ) : (
              <p>No trailer videos available</p>
            )}
          </div>

          {/* Movie scene part */}
          <SceneGallery
          mediaType={"movie"}
            sceneImages={sceneImages}
            handleImageClick={handleImageClick}
          />

          {/* Modal for viewing larger scene images */}
          <dialog id="scene_modal" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              {selectedImage && (
                <Image
                  className="w-full"
                  src={`https://image.tmdb.org/t/p/w1280${selectedImage}`}
                  alt="Selected Scene"
                  width={800}
                  height={450}
                />
              )}
            </div>
          </dialog>

          <h2 className="text-2xl text-yellow-500 font-bold ml-16 mb-8">
            Similar Movies
          </h2>
          <SimilarMovieGroup
            mediaType={"movie"}
            movieId={numericMovieId.toString()}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailedMoviePage;
