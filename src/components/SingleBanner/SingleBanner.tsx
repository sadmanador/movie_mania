import { Movie } from '@/types/MovieTypes';
import Image from 'next/image';
import React from 'react';
 // Adjust the path to your Movie type

interface SingleBannerProps {
  movie: Movie;
  currentItem: number;
  itemIndex: number; // Add this to handle dynamic IDs
}

const SingleBanner: React.FC<SingleBannerProps> = ({ movie, currentItem, itemIndex }) => {
  // Construct the image URL using the movie's poster path
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div
      id={`item${itemIndex}`} // Dynamic ID based on itemIndex
      className={`carousel-item w-full ${
        currentItem === itemIndex ? "block" : "hidden"
      }`}
    >
      <Image
      width={600}
      height={600}
        src={imageUrl} // Use the constructed image URL
        alt={movie.title} // Provide alt text for accessibility
      />
    </div>
  );
};

export default SingleBanner;
