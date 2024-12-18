import React from "react";
import {
  Calendar,
  FileText,
  PieChart,
  BarChart,
  ChevronDown,
} from "lucide-react";

const ReportCard = ({ icon: Icon, title, value, description }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-600 font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-[rgb(26,55,91)] mt-2">
          {value}
        </h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>
      <Icon className="text-[rgb(26,55,91)] opacity-80" size={24} />
    </div>
  </div>
);

const MentalHealthReportPage = () => {
  const reportCards = [
    {
      icon: Calendar,
      title: "Appointments Attended",
      value: "24",
      description: "This month",
    },
    {
      icon: FileText,
      title: "Journal Entries",
      value: "32",
      description: "This month",
    },
    {
      icon: PieChart,
      title: "Mood Trends",
      value: "85%",
      description: "Positive",
    },
    {
      icon: BarChart,
      title: "Stress Levels",
      value: "7.2",
      description: "Average",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Mental Health Report
        </h1>
        <button className="bg-[rgb(26,55,91)] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportCards.map((card, index) => (
          <ReportCard key={index} {...card} />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Mood Trends
        </h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 font-medium">Last 30 Days</span>
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="text-gray-500 text-sm">View All</span>
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </div>
          </div>
          <div className="h-64">
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Mood Trends Chart</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Stress Levels
        </h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 font-medium">Last 30 Days</span>
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="text-gray-500 text-sm">View All</span>
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </div>
          </div>
          <div className="h-64">
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Stress Levels Chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthReportPage;
