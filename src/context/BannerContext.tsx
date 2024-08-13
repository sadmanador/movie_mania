import React, { createContext, useState, useEffect, ReactNode } from "react";

interface BannerMovieContextType {
  movies: any[];
  searchResult: any[];
  sliderData: any[];
  loading: boolean;
  error: Error | null;
  page: number;
  singleMovie: {};
  setPage: (page: number | ((prev: number) => number)) => void;
  setQuery: (query: string | ((prev: string) => string)) => void;
  setMovieOrTv: (movieOrTv: string | ((prev: string) => string)) => void;
  setTrendingOptions: (
    trendingOptions: string | ((prev: string) => string)
  ) => void;
  setSingleMovie: (singleMovie: {} | ((prev: {}) => {})) => void;
}

const defaultContextValue: BannerMovieContextType = {
  movies: [],
  searchResult: [],
  sliderData: [],
  loading: true,
  error: null,
  page: 1,
  singleMovie: [],
  setPage: () => {},
  setQuery: () => {},
  setSingleMovie: () => {},
  setMovieOrTv: () => {},
  setTrendingOptions: () => {},
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [movieOrTv, setMovieOrTv] = useState<string>("movie");
  const [trendingOptions, setTrendingOptions] = useState<string>("top_rated");

  console.log(movieOrTv);

  // page-wise movie
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
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  }, [page, movieOrTv, trendingOptions]);

  // static movie data
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

  // movie data for search box
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

  const contextValue = {
    movies,
    sliderData,
    loading,
    error,
    setPage,
    page,
    searchResult,
    setQuery,
    singleMovie,
    setSingleMovie,
    setMovieOrTv,
    setTrendingOptions,
  };

  return (
    <BannerMovieContext.Provider value={contextValue}>
      {children}
    </BannerMovieContext.Provider>
  );
};

export default BannerContext;
