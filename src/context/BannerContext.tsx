import React, { createContext, useState, useEffect, ReactNode } from "react";

interface BannerMovieContextType {
  movies: any[];
  searchResult: any[];
  sliderData: any[];
  similarMovies: any[]; // Added state for similar movies
  loading: boolean;
  error: Error | null;
  page: number;
  detailsType: "movie" | "tv";
  singleMovie: {};
  movieId: string; // Added state for movie ID
  setPage: (page: number | ((prev: number) => number)) => void;
  setQuery: (query: string | ((prev: string) => string)) => void;
  setDetailsType: (detailsType: "movie" | "tv" | ((prev: "movie" | "tv") => "movie" | "tv")) => void;
  setMovieOrTv: (movieOrTv: string | ((prev: string) => string)) => void;
  setTrendingOptions: (trendingOptions: string | ((prev: string) => string)) => void;
  setSingleMovie: (singleMovie: {} | ((prev: {}) => {})) => void;
  setMovieId: (movieId: string | ((prev: string) => string)) => void; // Added setter for movie ID
}

const defaultContextValue: BannerMovieContextType = {
  movies: [],
  searchResult: [],
  sliderData: [],
  similarMovies: [], // Added default value for similar movies
  loading: true,
  error: null,
  page: 1,
  detailsType: "movie",
  singleMovie: {},
  movieId: "", // Added default value for movie ID
  setPage: () => {},
  setQuery: () => {},
  setSingleMovie: () => {},
  setMovieOrTv: () => {},
  setTrendingOptions: () => {},
  setDetailsType: () => {},
  setMovieId: () => {}, // Added default function for movie ID setter
};

export const BannerMovieContext = createContext<BannerMovieContextType>(defaultContextValue);

interface BannerContextProps {
  children: ReactNode;
}

const API_KEY = "c7cf1258a5aa723e8a98f08f639e86b6";
const BASE_URL = "https://api.themoviedb.org/3";

const BannerContext: React.FC<BannerContextProps> = ({ children }) => {
  const [singleMovie, setSingleMovie] = useState<{}>({});
  const [movies, setMovies] = useState<any[]>([]);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [sliderData, setSliderData] = useState<any[]>([]);
  const [similarMovies, setSimilarMovies] = useState<any[]>([]); // Added state for similar movies
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [movieOrTv, setMovieOrTv] = useState<string>("movie");
  const [trendingOptions, setTrendingOptions] = useState<string>("top_rated");
  const [detailsType, setDetailsType] = useState<"movie" | "tv">("movie");
  const [movieId, setMovieId] = useState<string>(""); // Added state for movie ID

  // Fetch movies
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}/${movieOrTv}/${trendingOptions}?api_key=${API_KEY}&page=${page}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error as Error);
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    if (page !== 1) {
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
    }
  }, [page, movieOrTv, trendingOptions]);

  // Fetch slider data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSliderData(data.results);
      } catch (error) {
        setError(error as Error);
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch search results
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSearchResult(data.results);
      } catch (error) {
        setError(error as Error);
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  // Fetch similar movies when movieId changes
  useEffect(() => {
    const fetchSimilarMovies = async () => {
      if (movieId) {
        try {
          const response = await fetch(
            `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setSimilarMovies(data.results);
        } catch (error) {
          setError(error as Error);
          console.error("Fetch error:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSimilarMovies();
  }, [movieId]);

  const contextValue: BannerMovieContextType = {
    movies,
    sliderData,
    searchResult,
    similarMovies, // Added similar movies to context value
    loading,
    error,
    setPage,
    page,
    setQuery,
    singleMovie,
    setSingleMovie,
    setMovieOrTv,
    setTrendingOptions,
    detailsType,
    setDetailsType,
    movieId, // Added movie ID to context value
    setMovieId, // Added setter for movie ID
  };

  return (
    <BannerMovieContext.Provider value={contextValue}>
      {children}
    </BannerMovieContext.Provider>
  );
};

export default BannerContext;
