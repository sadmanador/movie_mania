'use client';
import SimilarMovieGroup from '@/components/SimilarMovieGroup/SimilarMovieGroup';
import MediaDetails from '@/components/MediaDetails/MediaDetails';
import SceneGallery from '@/components/SceneGallery/SceneGallery';
import SceneModal from '@/components/SceneModal/SceneModal';
import Castings from '@/components/Castings/Castings';
import Trailers from '@/components/Trailers/Trailers';
import { VideoDetails } from '@/types/YoutubeType';
import { SingleMovie } from '@/types/SingleMovie';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Credits } from '@/types/Credits';
import { ImageDetails } from '@/types/SceneType';

const DetailedMoviePage = () => {
  const [movie, setMovie] = useState<SingleMovie | null>(null);
  const [youtubeData, setYoutubeData] = useState<VideoDetails[] | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null); // For movie credits
  const [sceneImages, setSceneImages] = useState<ImageDetails[]>([]); // For movie scene images
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // For the selected scene image
  const pathname = usePathname();
  const lastPartOfPath = pathname?.split('/movies/')[1];
  const numericMovieId = Number(lastPartOfPath);

  const imageUrl = `https://image.tmdb.org/t/p/w1280${movie?.poster_path}`;
  const backDropImg = `https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`;

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await fetch(
          `${'https://api.themoviedb.org/3'}/movie/${numericMovieId}?api_key=${'c7cf1258a5aa723e8a98f08f639e86b6'}`,
        );
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchMovieData();
  }, [numericMovieId]);

  useEffect(() => {
    const fetchYoutubeData = async () => {
      try {
        const res = await fetch(
          `${'https://api.themoviedb.org/3'}/movie/${numericMovieId}/videos?api_key=${'c7cf1258a5aa723e8a98f08f639e86b6'}`,
        );
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setYoutubeData(data.results.slice(0, 6));
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchYoutubeData();
  }, [numericMovieId]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const res = await fetch(
          `${'https://api.themoviedb.org/3'}/movie/${numericMovieId}/credits?api_key=${'c7cf1258a5aa723e8a98f08f639e86b6'}`,
        );
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setCredits(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchMovieCredits();
  }, [numericMovieId]);

  useEffect(() => {
    const fetchMovieImages = async () => {
      try {
        const res = await fetch(
          `${'https://api.themoviedb.org/3'}/movie/${numericMovieId}/images?api_key=${'c7cf1258a5aa723e8a98f08f639e86b6'}`,
        );
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setSceneImages(data.backdrops.slice(0, 6));
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchMovieImages();
  }, [numericMovieId]);

  const genreNames: string = movie?.genres
    ? movie?.genres.map((genre: { name: string }) => genre.name).join(', ')
    : '';

  // Filter out crew members who are not involved in Acting
  const featuredCrew = credits?.crew.filter((member: any) =>
    ['Director', 'Producer', 'Screenplay', 'Writer'].includes(member.job),
  );

  const handleOpenModal = (image: string) => {
    setSelectedImage(image);
    const dialog = document.getElementById('scene_modal') as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    const dialog = document.getElementById('scene_modal') as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  };

  return (
    <div className="">
      {movie ? (
        <>
          <MediaDetails
            movie={movie}
            genreNames={genreNames}
            featuredCrew={credits?.crew ?? []}
            handleOpenModal={handleOpenModal}
          />
          <Trailers youtubeData={youtubeData} />
          <Castings cast={credits?.cast || []} />
          <SceneGallery
            mediaType={'movie'}
            sceneImages={sceneImages}
            handleImageClick={handleOpenModal}
          />
          <SceneModal
            selectedImage={selectedImage}
            onClose={handleCloseModal}
          />
          <SimilarMovieGroup
            mediaType={'movie'}
            movieId={numericMovieId.toString()}
          />
        </>
      ) : (
        <p>Loading...single</p>
      )}
    </div>
  );
};

export default DetailedMoviePage;
