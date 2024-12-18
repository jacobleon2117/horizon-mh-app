import React, { useState, useEffect } from "react";
import { Plus, Search, Calendar, ChevronDown } from "lucide-react";
import { toast } from "react-hot-toast";
import useJournalStore from "@/stores/journalStore";
import { journalsApi } from "@/api";

const JournalEntry = ({ title, content, mood, createdAt }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-lg text-[rgb(26,55,91)]">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
      <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-[rgb(26,55,91)]">
        {mood}
      </span>
    </div>
    <p className="text-gray-600 mt-4 line-clamp-3">{content}</p>
  </div>
);

const EmptyState = ({ title, description, action }) => (
  <div className="text-center py-12">
    <div className="rounded-full bg-gray-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
      <Plus className="w-8 h-8 text-gray-400" />
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 mb-4">{description}</p>
    {action}
  </div>
);

const NewJournalModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("happy");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addJournal = useJournalStore((state) => state.addJournal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await journalsApi.create({
        title,
        content,
        mood: mood.toLowerCase(),
      });

      addJournal(response.data.data.journal);
      toast.success("Journal entry created successfully!");
      onClose();

      setTitle("");
      setMood("happy");
      setContent("");
    } catch (error) {
      console.error("Failed to create journal:", error);
      toast.error("Failed to create journal entry");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">New Journal Entry</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Entry title..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mood
                </label>
                <select
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="happy">Happy</option>
                  <option value="sad">Sad</option>
                  <option value="angry">Angry</option>
                  <option value="anxious">Anxious</option>
                  <option value="calm">Calm</option>
                  <option value="stressed">Stressed</option>
                  <option value="neutral">Neutral</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Entry
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-2 border rounded-md h-48"
                  placeholder="Write your thoughts..."
                  required
                />
              </div>
            </div>
          </div>
          <div className="p-6 border-t bg-gray-50 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-[rgb(26,55,91)] text-white rounded-md hover:bg-opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Save Entry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const JournalsPage = () => {
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);
  const { journals, isLoading, fetchJournals } = useJournalStore();

  useEffect(() => {
    fetchJournals();
  }, [fetchJournals]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[rgb(26,55,91)]"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Journal Entries</h1>
        <button
          onClick={() => setIsNewEntryOpen(true)}
          className="flex items-center gap-2 bg-[rgb(26,55,91)] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <Plus size={20} />
          New Entry
        </button>
      </div>

      {journals.length === 0 ? (
        <EmptyState
          title="No journal entries yet"
          description="Start documenting your thoughts and feelings"
          action={
            <button
              onClick={() => setIsNewEntryOpen(true)}
              className="inline-flex items-center gap-2 text-[rgb(26,55,91)] hover:text-opacity-80"
            >
              <Plus size={16} />
              Create your first entry
            </button>
          }
        />
      ) : (
        <>
          <div className="mb-6 flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search entries..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                <Calendar size={20} />
                Date Range
                <ChevronDown size={16} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                Mood
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {journals.map((entry, index) => (
              <JournalEntry key={entry._id || index} {...entry} />
            ))}
          </div>
        </>
      )}

      <NewJournalModal
        isOpen={isNewEntryOpen}
        onClose={() => setIsNewEntryOpen(false)}
      />
    </div>
  );
};

export default JournalsPage;
