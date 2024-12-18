import { create } from "zustand";
import { journalsApi } from "@/api";

const useJournalStore = create((set) => ({
  journals: [],
  isLoading: false,
  error: null,

  addJournal: (journal) =>
    set((state) => ({
      journals: [journal, ...state.journals],
    })),

  fetchJournals: async () => {
    set({ isLoading: true });
    try {
      const response = await journalsApi.getAll();
      set({
        journals: response.data.data.journals,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        isLoading: false,
      });
    }
  },
}));

export default useJournalStore;
