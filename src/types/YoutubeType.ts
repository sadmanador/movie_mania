export type VideoData = {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string; // Alternatively, you can use `Date` if you plan to parse it as a Date object
    site: string;
    size: number;
    type: string;
  };