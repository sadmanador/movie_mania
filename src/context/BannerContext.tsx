import React, { createContext, useState, useEffect, ReactNode } from 'react';


interface BannerMovieContextType {
  movies: any[]; 
  loading: boolean;
  error: Error | null;
}

// Provide a default context value
const defaultContextValue: BannerMovieContextType = {
  movies: [],
  loading: true,
  error: null,
};

export const BannerMovieContext = createContext<BannerMovieContextType>(defaultContextValue);

interface BannerContextProps {
  children: ReactNode;
}

const BannerContext: React.FC<BannerContextProps> = ({ children }) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=c7cf1258a5aa723e8a98f08f639e86b6");
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
  }, []);

  const contextValue = {
    movies,
    loading,
    error,
  };

  return (
    <BannerMovieContext.Provider value={contextValue}>
      {children}
    </BannerMovieContext.Provider>
  );
};

export default BannerContext;
