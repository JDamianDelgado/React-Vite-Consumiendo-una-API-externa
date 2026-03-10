import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlanetas = createAsyncThunk(
  "planetas/fetchPlanetas",
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/planets?page=${page}&limit=12`
      );

      return {
        items: response.data.items ?? [],
        totalPages: response.data.meta?.totalPages ?? page,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Ocurrio un error al cargar planetas."
      );
    }
  }
);

export const fetchPlaneta = createAsyncThunk(
  "planetas/fetchPlaneta",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/planets/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Ocurrio un error al cargar el planeta."
      );
    }
  }
);

const planetasSlice = createSlice({
  name: "planetas",
  initialState: {
    planetas: [],
    planeta: null,
    page: 1,
    totalPages: 1,
    loading: false,
    error: null,
  },
  reducers: {
    nextPagePlaneta: (state) => {
      if (state.page < state.totalPages) {
        state.page += 1;
      }
    },
    prevPagePlaneta: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    clearPlaneta: (state) => {
      state.planeta = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanetas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlanetas.fulfilled, (state, action) => {
        state.loading = false;
        state.planetas = action.payload.items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPlanetas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchPlaneta.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlaneta.fulfilled, (state, action) => {
        state.loading = false;
        state.planeta = action.payload;
      })
      .addCase(fetchPlaneta.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { nextPagePlaneta, prevPagePlaneta, clearPlaneta } =
  planetasSlice.actions;
export default planetasSlice.reducer;
