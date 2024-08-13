import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination';

interface SimilarMovieGroupProps {
  movieId: string;
}

const SimilarMovieGroup: React.FC<SimilarMovieGroupProps> = ({ movieId }) => {
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      if (movieId) {
        setLoading(true); // Start loading before fetching data
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=c7cf1258a5aa723e8a98f08f639e86b6`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setSimilarMovies(data.results); // Set similar movies in state
        } catch (error) {
          setError(error as Error); // Set error in state
          console.error("Fetch error:", error);
        } finally {
          setLoading(false); // Stop loading once done
        }
      }
    };

    fetchSimilarMovies();
  }, [movieId]); // Dependency array ensures this runs when movieId changes

  if (loading) return <p>Loading similar movies...</p>;
  if (error) return <p>Error fetching similar movies: {error.message}</p>;

  return (
    <>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:mx-14 mx-4">
        {similarMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default SimilarMovieGroup;
