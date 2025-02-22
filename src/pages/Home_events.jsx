import React from "react";

const Event = ({ date, month, title, duration }) => {
  return (
    <div className="bg-gray-00 shadow-md rounded-lg flex flex-col sm:flex-row p-4 overflow-hidden">
      {/* Date Box */}
      <div className="bg-[#4C7B8B] text-white flex flex-col items-center justify-center w-full sm:w-1/3 py-4 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
        <p className="text-lg uppercase">{month}</p>
        <h1 className="text-4xl font-bold">{date}</h1>
      </div>

      {/* Event Details */}
      <div className="flex flex-col justify-center p-4 w-full">
        <a href="#" className="text-lg font-semibold hover:underline hover:text-blue-600">
          {title}
        </a>
        <h2 className="mt-2 text-sm font-medium text-gray-600">{duration}</h2>
      </div>
    </div>
  );
};

const HomeEvents = () => {
  const events = [
    {
      date: "17",
      month: "Feb",
      title: "Conference for Technology for Disabled Persons",
      duration: "17/02/2025 - 18/02/2025",
    },
    {
      date: "22",
      month: "Mar",
      title: "AI & Machine Learning Workshop",
      duration: "22/03/2025",
    },
    {
      date: "05",
      month: "Apr",
      title: "Cyber Security Awareness Program",
      duration: "05/04/2025",
    },
    {
      date: "12",
      month: "May",
      title: "Blockchain & Web3 Seminar",
      duration: "12/05/2025 - 13/05/2025",
    },
  ];

  return (
    <div className="px-16 py-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left pl-8">
          Events at IIITN
        </h1>
        <a href="#" className="text-blue-600 hover:underline mt-4 sm:mt-0">
          Read More
        </a>
      </div>

      {/* Events Grid (4 → 2 → 1 Layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <Event
            key={index}
            date={event.date}
            month={event.month}
            title={event.title}
            duration={event.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeEvents;
