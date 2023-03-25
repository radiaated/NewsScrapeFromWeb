import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBbcNews = createAsyncThunk("news/fetchBbcNews", async () => {
  const { data } = await axios.get(`http://127.0.0.1:5000/top/bbc`);

  return data;
});
export const fetchHnNews = createAsyncThunk("news/fetchHnNews", async () => {
  const { data } = await axios.get(`http://127.0.0.1:5000/top/hn`);

  return data;
});
export const fetchAfNews = createAsyncThunk("news/fetchAfNews", async () => {
  const { data } = await axios.get(`http://127.0.0.1:5000/top/af`);

  return data;
});

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    bbc: {
      loading: false,
      news: [],
      msg: "",
    },
    hn: {
      loading: false,
      news: [],
      msg: "",
    },
    af: {
      loading: false,
      news: [],
      msg: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    // --
    // BBC
    // --
    builder.addCase(fetchBbcNews.pending, (state) => {
      state.bbc.loading = true;
      state.bbc.news = [];
      state.bbc.message = "";
    });
    builder.addCase(fetchBbcNews.fulfilled, (state, action) => {
      state.bbc.loading = false;
      state.bbc.news = action.payload;
      state.bbc.message = "";
    });
    builder.addCase(fetchBbcNews.rejected, (state) => {
      state.bbc.loading = false;
      state.bbc.news = [];
      state.bbc.message = "Unable to fetch news from BBC.";
    });

    // ---
    // The Hacker News
    // ---

    builder.addCase(fetchHnNews.pending, (state) => {
      state.hn.loading = true;
      state.hn.news = [];
      state.hn.message = "";
    });
    builder.addCase(fetchHnNews.fulfilled, (state, action) => {
      state.hn.loading = false;
      state.hn.news = action.payload;
      state.hn.message = "";
    });
    builder.addCase(fetchHnNews.rejected, (state) => {
      state.hn.loading = false;
      state.hn.news = [];
      state.hn.message = "Unable to fetch news from BBC.";
    });

    // ---
    // The AF News
    // ---

    builder.addCase(fetchAfNews.pending, (state) => {
      state.af.loading = true;
      state.af.news = [];
      state.af.message = "";
    });
    builder.addCase(fetchAfNews.fulfilled, (state, action) => {
      state.af.loading = false;
      state.af.news = action.payload;
      state.af.message = "";
    });
    builder.addCase(fetchAfNews.rejected, (state) => {
      state.af.loading = false;
      state.af.news = [];
      state.af.message = "Unable to fetch news from BBC.";
    });
  },
});

// Action creators are generated for each case reducer function

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
