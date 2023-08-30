import { create } from "zustand";
import { IMovie } from "../types/movie";
import { persist } from "zustand/middleware";

interface State {
  watchlist: IMovie[];
  addToWatchlist: (movie: IMovie) => void;
  removeFromWatchlist: (movieId: string) => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      watchlist: [],
      addToWatchlist: (movie) =>
        set((state) => ({ watchlist: [...state.watchlist, movie] })),
      removeFromWatchlist: (movieId) =>
        set((state) => ({
          watchlist: state.watchlist.filter((m) => m.id !== movieId)
        }))
    }),
    {
      name: "movie-watchlist",
      partialize: (state) => ({ watchlist: state.watchlist })
    }
  )
);
