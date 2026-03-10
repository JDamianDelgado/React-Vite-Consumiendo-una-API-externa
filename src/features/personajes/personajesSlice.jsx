import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPersonajes = createAsyncThunk(
  "personajes/fetchPersonajes",
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/characters?page=${page}&limit=12`
      );

      return {
        items: response.data.items ?? [],
        totalPages: response.data.meta?.totalPages ?? page,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Ocurrio un error al cargar personajes."
      );
    }
  }
);

export const fetchPersonaje = createAsyncThunk(
  "personajes/fetchPersonaje",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/characters/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Ocurrio un error al cargar el personaje."
      );
    }
  }
);

const personajesSlice = createSlice({
  name: "personajes",
  initialState: {
    personajes: [],
    personaje: null,
    page: 1,
    totalPages: 1,
    loading: false,
    error: null,
  },
  reducers: {
    nextPage: (state) => {
      if (state.page < state.totalPages) {
        state.page += 1;
      }
    },
    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    clearPersonaje: (state) => {
      state.personaje = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonajes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPersonajes.fulfilled, (state, action) => {
        state.loading = false;
        state.personajes = action.payload.items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPersonajes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchPersonaje.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPersonaje.fulfilled, (state, action) => {
        state.loading = false;
        state.personaje = action.payload;
      })
      .addCase(fetchPersonaje.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { nextPage, prevPage, clearPersonaje } = personajesSlice.actions;
export default personajesSlice.reducer;
