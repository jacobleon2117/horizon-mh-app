import React, { useState } from "react";
import { CalendarIcon, Clock, Video, Phone, MapPin } from "lucide-react";

const TimeSlot = ({ time, isAvailable, isSelected, onClick }) => (
  <button
    onClick={onClick}
    disabled={!isAvailable}
    className={`
      p-3 rounded-lg text-center w-full transition-all
      ${
        isSelected
          ? "bg-[rgb(26,55,91)] text-white"
          : isAvailable
          ? "bg-white hover:border-[rgb(26,55,91)] border"
          : "bg-gray-100 text-gray-400 cursor-not-allowed"
      }
    `}
  >
    {time}
  </button>
);

const AppointmentType = ({
  icon: Icon,
  title,
  description,
  isSelected,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`
      p-4 rounded-lg text-left w-full transition-all flex items-start gap-4 border
      ${
        isSelected
          ? "border-[rgb(26,55,91)] bg-blue-50"
          : "hover:border-[rgb(26,55,91)]"
      }
    `}
  >
    <Icon size={24} className="text-[rgb(26,55,91)]" />
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  </button>
);

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const appointmentTypes = [
    {
      icon: Video,
      title: "Video Session",
      description: "Meet with your therapist via secure video call",
    },
    {
      icon: Phone,
      title: "Phone Session",
      description: "Connect with your therapist over the phone",
    },
    {
      icon: MapPin,
      title: "In-Person Session",
      description: "Visit our office for a face-to-face session",
    },
  ];

  const timeSlots = [
    { time: "9:00 AM", isAvailable: true },
    { time: "10:00 AM", isAvailable: true },
    { time: "11:00 AM", isAvailable: false },
    { time: "1:00 PM", isAvailable: true },
    { time: "2:00 PM", isAvailable: true },
    { time: "3:00 PM", isAvailable: false },
    { time: "4:00 PM", isAvailable: true },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Schedule an Appointment
      </h1>

      <div className="flex items-center mb-8">
        <div className="flex-1">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[rgb(26,55,91)] text-white rounded-full flex items-center justify-center">
              1
            </div>
            <div className="ml-3">
              <p className="font-medium">Type</p>
              <p className="text-sm text-gray-500">Select session type</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">
              2
            </div>
            <div className="ml-3">
              <p className="font-medium">Date & Time</p>
              <p className="text-sm text-gray-500">Choose your slot</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">
              3
            </div>
            <div className="ml-3">
              <p className="font-medium">Confirm</p>
              <p className="text-sm text-gray-500">Review and book</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Select Session Type</h2>
        <div className="space-y-3">
          {appointmentTypes.map((type, index) => (
            <AppointmentType
              key={index}
              {...type}
              isSelected={selectedType === index}
              onClick={() => setSelectedType(index)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Select Date</h2>
          <div className="bg-white p-4 rounded-lg border">
            <div className="text-center text-gray-500">
              Calendar component placeholder
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Select Time</h2>
          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((slot, index) => (
              <TimeSlot
                key={index}
                {...slot}
                isSelected={selectedTime === index}
                onClick={() => setSelectedTime(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          className="px-6 py-2 bg-[rgb(26,55,91)] text-white rounded-lg hover:bg-opacity-90 transition-colors"
          onClick={() => {}}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SchedulePage;
