import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "c7cf1258a5aa723e8a98f08f639e86b6";

interface ApiDataState {
  movies: any[];
  searchResult: any[];
  sliderData: any[];
  loading: boolean;
  error: string | null;
  page: number;
  query: string;
}

const initialState: ApiDataState = {
  movies: [],
  searchResult: [],
  sliderData: [],
  loading: true,
  error: null,
  page: 1,
  query: "a",
};

// Async thunk for fetching movies
export const fetchMovies = createAsyncThunk(
  "apiData/fetchMovies",
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Async thunk for fetching slider data
export const fetchSliderData = createAsyncThunk(
  "apiData/fetchSliderData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Async thunk for fetching search results
export const fetchSearchResults = createAsyncThunk(
  "apiData/fetchSearchResults",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const apiData = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchSliderData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSliderData.fulfilled, (state, action) => {
        state.loading = false;
        state.sliderData = action.payload;
      })
      .addCase(fetchSliderData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResult = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage, setQuery } = apiData.actions;
export default apiData.reducer;
