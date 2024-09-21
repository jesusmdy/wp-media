import { create } from "zustand";
import { TMedia } from "./media";

interface IBookmarStore {
  bookmarks: TMedia[];
  setBookmarks: (value: TMedia[]) => void;
  addBookmark: (bookmark: TMedia) => void;
  deleteBookmark: (id: number) => void;
}

export const useBookmarksStore = create<IBookmarStore>(
  (set) => ({
    bookmarks: [],
    setBookmarks: (value) => set((state) => ({...state, bookmarks: value })),
    addBookmark: (bookmark) => set((state) => ({
      ...state,
      bookmarks: [...state.bookmarks, bookmark],
    })),
    deleteBookmark: (id) => set((state) => ({
      ...state,
      bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== id),
    })),
  })
)

export const useFindBookmark = (id: TMedia['id']) => {
  const { bookmarks } = useBookmarksStore();
  return bookmarks.find((bookmark) => bookmark.id === id);
}
