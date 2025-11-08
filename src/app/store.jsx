import { configureStore } from "@reduxjs/toolkit";
import personajesReducer from "../features/personajes/personajesSlice";
import planetasReducer from "../features/planetas/planetasSlice";
export const store = configureStore({
  reducer: {
    personajes: personajesReducer,
    planetas: planetasReducer,
  },
});
