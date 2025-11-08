import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//todos los planetas
export const fetchPlanetas = createAsyncThunk(
  "planetas/fetchPlanetas",
  async (page = 1) => {
    const response = await axios.get(
      `https://dragonball-api.com/api/planets?page=${page}&limit=10`
    );
    return response.data.items;
  }
);

//planeta individual\
export const fetchPlaneta = createAsyncThunk(
  "planetas/fetchPlaneta",
  async (id) => {
    const response = await axios.get(
      `https://dragonball-api.com/api/planets/${id}`
    );
    return response.data;
  }
);

const planetasSlice = createSlice({
  name: "planetas",
  initialState: {
    planetas: [],
    planeta: null,
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {
    nextPagePlaneta: (state) => {
      state.page = state.page === 2 ? 1 : state.page + 1;
    },
    prevPagePlaneta: (state) => {
      state.page = state.page === 1 ? 2 : state.page - 1;
    },
    clearPlaneta: (state) => {
      state.planeta = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanetas.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPlanetas.fulfilled, (state, action) => {
        state.loading = false;
        state.planetas = action.payload;
      })
      .addCase(fetchPlanetas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPlaneta.fulfilled, (state, action) => {
        state.planeta = action.payload;
      });
  },
});

export const { nextPagePlaneta, prevPagePlaneta, clearPlaneta } =
  planetasSlice.actions;
export default planetasSlice.reducer;
