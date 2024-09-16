export type TVShow = {
  adult: boolean;
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  overview: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
  poster_path: string;

  first_air_date: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
};
