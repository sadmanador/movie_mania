import React, { createContext, ReactNode, useEffect, useState } from "react";

interface BannerMovieContextType {
  movies: any[];
  searchResult: any[];
  sliderData: any[];
  similarMovies: any[];
  loading: boolean;
  error: Error | null;
  page: number;
  detailsType: "movie" | "tv";
  movieOrTv: string;
  singleMovie: {};
  movieId: string;
  setPage: (page: number | ((prev: number) => number)) => void;
  setQuery: (query: string | ((prev: string) => string)) => void;
  setDetailsType: (
    detailsType: "movie" | "tv" | ((prev: "movie" | "tv") => "movie" | "tv")
  ) => void;
  setMovieOrTv: (movieOrTv: string | ((prev: string) => string)) => void;
  setTrendingOptions: (
    trendingOptions: string | ((prev: string) => string)
  ) => void;
  setSingleMovie: (singleMovie: {} | ((prev: {}) => {})) => void;
  setMovieId: (movieId: string | ((prev: string) => string)) => void;
}

const defaultContextValue: BannerMovieContextType = {
  movies: [],
  searchResult: [],
  sliderData: [],
  similarMovies: [],
  loading: true,
  error: null,
  page: 1,
  detailsType: "movie",
  movieOrTv: "movie",
  singleMovie: {},
  movieId: "",
  setPage: () => {},
  setQuery: () => {},
  setSingleMovie: () => {},
  setMovieOrTv: () => {},
  setTrendingOptions: () => {},
  setDetailsType: () => {},
  setMovieId: () => {},
};

export const BannerMovieContext =
  createContext<BannerMovieContextType>(defaultContextValue);

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
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [movieOrTv, setMovieOrTv] = useState<string>("movie");
  const [trendingOptions, setTrendingOptions] = useState<string>("top_rated");
  const [detailsType, setDetailsType] = useState<"movie" | "tv">("movie");
  const [movieId, setMovieId] = useState<string>("");


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}/${movieOrTv}/${trendingOptions}?api_key=${API_KEY}&page=${page}`
        );
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Response Error:", errorText);
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("Fetched Data:", data);
        setMovies(data.results);
      } catch (error) {
        setError(error as Error);
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, movieOrTv, trendingOptions]);

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
    similarMovies,
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
    movieId,
    setMovieId,
    movieOrTv
  };

  return (
    <BannerMovieContext.Provider value={contextValue}>
      {children}
    </BannerMovieContext.Provider>
  );
};

export default BannerContext;
