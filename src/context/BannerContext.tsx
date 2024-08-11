import React, { createContext, useState, useEffect, ReactNode } from "react";

interface BannerMovieContextType {
  movies: any[];
  searchResult: any[];
  sliderData: any[];
  loading: boolean;
  error: Error | null;
  page: number;
  setPage: (page: number | ((prev: number) => number)) => void;
  setQuery: (page: string | ((prev: string) => string)) => void;
}

// Provide a default context value
const defaultContextValue: BannerMovieContextType = {
  movies: [],
  searchResult: [],
  sliderData: [],
  loading: true,
  error: null,
  page: 1,
  setPage: () => {},
  setQuery: () => {},
};

export const BannerMovieContext =
  createContext<BannerMovieContextType>(defaultContextValue);

interface BannerContextProps {
  children: ReactNode;
}

const BannerContext: React.FC<BannerContextProps> = ({ children }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [sliderData, setSliderData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("a");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=c7cf1258a5aa723e8a98f08f639e86b6&page=${page}`
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
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=c7cf1258a5aa723e8a98f08f639e86b6`
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
          `https://api.themoviedb.org/3/search/movie?api_key=c7cf1258a5aa723e8a98f08f639e86b6&query=${query}`
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

  const contextValue = {
    movies,
    sliderData,
    loading,
    error,
    setPage,
    page,
    searchResult,
    setQuery,
  };

  return (
    <BannerMovieContext.Provider value={contextValue}>
      {children}
    </BannerMovieContext.Provider>
  );
};

export default BannerContext;
