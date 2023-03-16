import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../components/axiosClient/axiosClient";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",

  async (searchKey) => {
    const response = await axiosClient.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&s=${searchKey}`
    );

    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",

  async () => {
    const showText = "Friends";
    const response = await axiosClient.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&s=${showText}&type=series`
    );

    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await axiosClient.get(
      `?apiKey=${process.env.REACT_APP_API_KEY}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
