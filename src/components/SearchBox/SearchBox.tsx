"use client";
import { useEffect, useState } from "react";
import SearchResultCard from "@/components/SearchResultCard/SearchResultCard";
const API_KEY = "c7cf1258a5aa723e8a98f08f639e86b6";
const BASE_URL = "https://api.themoviedb.org/3";

const SearchBox = () => {
  const [results, setResults] = useState<any[]>([]);
  const [response, setResponse] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResponse(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!response) {
        setResults([]);
        return;
      }

      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${response}`
        );
        const data = await res.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [response]);

  return (
    <>
      <div className="border-neutral-950 border bottom-4 rounded-lg">
        <input
          type="text"
          className="border-gray-400 border-4 max-w-[400px] sm:w-[450px] lg:w-[450px] rounded-md placeholder:text-zinc-400 placeholder:text-md  p-1 border-none pl-4"
          placeholder="Search"
          onChange={handleInputChange}
        />
      </div>
      {/* Conditionally render the results */}
      {response && (
        <div className="p-2 md:w-[600px] h-64 bg-base-200 absolute right-0 overflow-auto">
          {results.map((movie, index) => (
            <SearchResultCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBox;
