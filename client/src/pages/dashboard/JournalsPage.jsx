import React, { useState } from "react";
import { Plus, Search, Calendar, ChevronDown } from "lucide-react";

const JournalEntry = ({ title, date, excerpt, mood }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-lg text-[rgb(26,55,91)]">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{date}</p>
      </div>
      <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-[rgb(26,55,91)]">
        {mood}
      </span>
    </div>
    <p className="text-gray-600 mt-4 line-clamp-3">{excerpt}</p>
  </div>
);

const NewJournalModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
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
                className="w-full p-2 border rounded-md"
                placeholder="Entry title..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mood
              </label>
              <select className="w-full p-2 border rounded-md">
                <option>Happy</option>
                <option>Calm</option>
                <option>Anxious</option>
                <option>Stressed</option>
                <option>Sad</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entry
              </label>
              <textarea
                className="w-full p-2 border rounded-md h-48"
                placeholder="Write your thoughts..."
              />
            </div>
          </div>
        </div>
        <div className="p-6 border-t bg-gray-50 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-[rgb(26,55,91)] text-white rounded-md hover:bg-opacity-90">
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
};

const JournalsPage = () => {
  const [isNewEntryOpen, setIsNewEntryOpen] = useState(false);

  const journalEntries = [
    {
      title: "Morning Reflection",
      date: "December 17, 2024",
      excerpt:
        "Today started off really well. I practiced the breathing exercises Dr. Smith recommended, and I'm feeling more centered than usual.",
      mood: "Calm",
    },
    {
      title: "Therapy Session Notes",
      date: "December 16, 2024",
      excerpt:
        "Had a breakthrough session with Dr. Smith today. We discussed some childhood memories and their impact on my current relationships.",
      mood: "Reflective",
    },
    {
      title: "Evening Thoughts",
      date: "December 15, 2024",
      excerpt:
        "Feeling a bit overwhelmed with work deadlines, but using the coping strategies we discussed in therapy.",
      mood: "Anxious",
    },
  ];

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
        {journalEntries.map((entry, index) => (
          <JournalEntry key={index} {...entry} />
        ))}
      </div>

      <NewJournalModal
        isOpen={isNewEntryOpen}
        onClose={() => setIsNewEntryOpen(false)}
      />
    </div>
  );
};

export default JournalsPage;
