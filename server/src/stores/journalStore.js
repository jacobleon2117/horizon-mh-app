import { create } from "zustand";

const useJournalStore = create((set) => ({
  journals: [],
  isLoading: false,
  error: null,

  addJournal: (journal) =>
    set((state) => ({
      journals: [journal, ...state.journals],
    })),

  setJournals: (journals) => set({ journals }),

  fetchJournals: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch("/api/journals");
      const data = await response.json();
      set({ journals: data.journals, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useJournalStore;
