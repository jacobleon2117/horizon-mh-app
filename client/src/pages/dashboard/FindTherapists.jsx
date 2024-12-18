import React from "react";
import { Search, Filter, Star, MapPin } from "lucide-react";

const TherapistCard = ({
  name,
  specialty,
  rating,
  experience,
  location,
  imageUrl,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
    <div className="flex gap-4">
      <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
        <img
          src={imageUrl || "/api/placeholder/96/96"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[rgb(26,55,91)]">{name}</h3>
        <p className="text-gray-600">{specialty}</p>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">
            {rating} ({experience} years experience)
          </span>
        </div>
        <div className="flex items-center mt-2 text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
      </div>
    </div>
    <div className="mt-4 pt-4 border-t flex justify-between items-center">
      <div className="space-x-2">
        <span className="px-2 py-1 bg-blue-50 text-[rgb(26,55,91)] rounded text-sm">
          Anxiety
        </span>
        <span className="px-2 py-1 bg-blue-50 text-[rgb(26,55,91)] rounded text-sm">
          Depression
        </span>
      </div>
      <button className="px-4 py-2 bg-[rgb(26,55,91)] text-white rounded-lg hover:bg-opacity-90 transition-colors">
        Book Session
      </button>
    </div>
  </div>
);

const FilterSection = ({ title, options }) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-3">{title}</h3>
    <div className="space-y-2">
      {options.map((option, index) => (
        <label key={index} className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-[rgb(26,55,91)]"
          />
          <span className="ml-2 text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

const FindTherapistsPage = () => {
  const therapists = [
    {
      name: "Dr. Sarah Smith",
      specialty: "Clinical Psychologist",
      rating: 4.9,
      experience: 12,
      location: "New York, NY",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Psychiatrist",
      rating: 4.8,
      experience: 8,
      location: "San Francisco, CA",
    },
    {
      name: "Dr. Emily Johnson",
      specialty: "Behavioral Therapist",
      rating: 4.7,
      experience: 15,
      location: "Chicago, IL",
    },
  ];

  const specialties = [
    "Anxiety",
    "Depression",
    "Trauma",
    "Relationships",
    "Stress",
  ];
  const availability = ["Morning", "Afternoon", "Evening", "Weekends"];
  const sessionTypes = ["Video Call", "Phone Call", "In-Person"];

  return (
    <div className="flex gap-6">
      <div className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <button className="text-sm text-[rgb(26,55,91)] hover:underline">
            Clear all filters
          </button>
        </div>

        <FilterSection title="Specialty" options={specialties} />
        <FilterSection title="Availability" options={availability} />
        <FilterSection title="Session Type" options={sessionTypes} />

        <div className="mt-6">
          <button className="w-full px-4 py-2 bg-[rgb(26,55,91)] text-white rounded-lg hover:bg-opacity-90 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search therapists by name, specialty, or location"
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter size={20} />
              Filters
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {therapists.map((therapist, index) => (
            <TherapistCard key={index} {...therapist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindTherapistsPage;
