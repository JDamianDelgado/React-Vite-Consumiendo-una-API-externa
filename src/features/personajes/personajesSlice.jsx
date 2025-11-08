import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//TOEDOS LOS PERSONAJES
export const fetchPersonajes = createAsyncThunk(
  "personajes/fetchPersonajes",
  async (page = 1) => {
    const response = await axios.get(
      `https://dragonball-api.com/api/characters?page=${page}&limit=10`
    );
    return response.data.items;
  }
);

// PERSONAJE INDIVIDUAL
export const fetchPersonaje = createAsyncThunk(
  "personajes/fetchPersonaje",
  async (id) => {
    const response = await axios.get(
      `https://dragonball-api.com/api/characters/${id}`
    );
    return response.data;
  }
);

const personajesSlice = createSlice({
  name: "personajes",
  initialState: {
    personajes: [],
    personaje: null,
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {
    nextPage: (state) => {
      state.page = state.page === 6 ? 1 : state.page + 1;
    },
    prevPage: (state) => {
      state.page = state.page === 1 ? 6 : state.page - 1;
    },
    clearPersonaje: (state) => {
      state.personaje = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LISTA
      .addCase(fetchPersonajes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPersonajes.fulfilled, (state, action) => {
        state.loading = false;
        state.personajes = action.payload;
      })
      .addCase(fetchPersonajes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // INDIVIDUAL
      .addCase(fetchPersonaje.fulfilled, (state, action) => {
        state.personaje = action.payload;
      });
  },
});

export const { nextPage, prevPage, clearPersonaje } = personajesSlice.actions;
export default personajesSlice.reducer;
