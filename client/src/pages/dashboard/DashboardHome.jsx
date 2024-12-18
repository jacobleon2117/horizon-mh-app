import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  FileText,
  MessageSquare,
  Users,
  Clock,
  BookOpen,
} from "lucide-react";

const DashboardCard = ({ icon: Icon, title, value, description }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-600 font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-[rgb(26,55,91)] mt-2">
          {value || "N/A"}
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          {description || "No data available"}
        </p>
      </div>
      <Icon className="text-[rgb(26,55,91)] opacity-80" size={24} />
    </div>
  </div>
);

const UpcomingSession = ({ title, therapist, time, type }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-[rgb(26,55,91)]">
          {title || "No session scheduled"}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          {therapist || "No therapist assigned"}
        </p>
        <p className="text-gray-500 text-sm mt-2">
          {type || "No type specified"}
        </p>
      </div>
      <div className="flex items-center text-gray-500 text-sm">
        <Clock size={14} className="mr-1" />
        {time || "N/A"}
      </div>
    </div>
  </div>
);

const DashboardHome = () => {
  const dashboardStats = [
    {
      icon: Calendar,
      title: "Upcoming Sessions",
      value: null,
      description: null,
    },
    {
      icon: FileText,
      title: "Journal Entries",
      value: null,
      description: null,
    },
    {
      icon: MessageSquare,
      title: "Messages",
      value: null,
      description: null,
    },
    {
      icon: Users,
      title: "Support Group",
      value: null,
      description: null,
    },
  ];

  const upcomingSessions = [];

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Dashboard Overview
            </h1>
            <button className="bg-[rgb(26,55,91)] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Schedule Session
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardStats.map((stat, index) => (
              <DashboardCard key={index} {...stat} />
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Upcoming Sessions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingSessions.length > 0 ? (
                upcomingSessions.map((session, index) => (
                  <UpcomingSession key={index} {...session} />
                ))
              ) : (
                <p>No upcoming sessions. Start by adding one!</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/dashboard/journals"
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center gap-2 text-[rgb(26,55,91)]"
              >
                <FileText size={20} />
                <span>Write Journal Entry</span>
              </Link>
              <Link
                to="/dashboard/schedule"
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center gap-2 text-[rgb(26,55,91)]"
              >
                <Calendar size={20} />
                <span>Schedule Appointment</span>
              </Link>
              <Link
                to="/dashboard/resources"
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center gap-2 text-[rgb(26,55,91)]"
              >
                <BookOpen size={20} />
                <span>View Resources</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
