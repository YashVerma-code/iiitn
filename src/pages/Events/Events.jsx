import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function EventPage({ UpcomingEvents, Pastevents }) {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [open, setOpen] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const getUniqueCategories = (events) => [
    ...new Set(events.map((event) => event.category)),
  ];

  const UpcomingCategories = getUniqueCategories(UpcomingEvents);
  const PastCategories = getUniqueCategories(Pastevents);

  const eventsList = activeTab === "upcoming" ? UpcomingEvents : Pastevents;

  useEffect(() => {
    let filtered = eventsList;

    if (selectedCategory) {
      filtered = filtered.filter(
        (event) => event.category === selectedCategory
      );
    }
    if (eventName) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(eventName.toLowerCase())
      );
    }
    if (eventDate) {
      filtered = filtered.filter(
        (event) => event.startDate === eventDate || event.endDate === eventDate
      );
    }

    setFilteredEvents(filtered);
    // console.log("Date: ", eventDate);
  }, [activeTab, selectedCategory, eventName, eventDate]);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center overflow-x-hidden font-ubuntu bg-[#f0f0f0] p-6 mx-auto">
      {/* Events page header will update in future */}
      <div className="w-full h-[50vh] sm:h-[100vh] bg-gray-300 mb-5 mt-0 grid grid-cols-11 grid-rows-10 gap-1">
        <div className="col-span-5 row-span-5 bg-cover bg-center sm:bg-cover bg-no-repeat"
         style={{ backgroundImage: `url(/events/event5.png)` }}
        >

        </div>
        <div className="col-span-3 row-span-3 col-start-6 bg-cover bg-center sm:bg-cover bg-no-repeat" style={{ backgroundImage: `url(/events/event4.jpg)` }}></div>
        <div className="col-span-3 row-span-3 col-start-9 bg-cover bg-center sm:bg-cover bg-no-repeat" style={{ backgroundImage: `url(/events/event2.jpg)` }}></div>
        <div className="col-span-6 row-span-4 col-start-6 row-start-4 bg-cover bg-center sm:bg-cover bg-no-repeat" style={{ backgroundImage: `url(/events/event7.jpg)` }}>
          
        </div>
        <div className="col-span-5 row-span-5 row-start-6 bg-cover bg-center sm:bg-cover bg-no-repeat" style={{ backgroundImage: `url(/events/event6.jpg)` }}></div>
        <div className="col-span-6 row-span-3 col-start-6 row-start-8 bg-cover bg-center sm:bg-cover bg-no-repeat" style={{ backgroundImage: `url(/events/event.jpg)` }}>
          
        </div>
      </div>
      <h2 className="text-4xl font-bold w-full text-center mt-10">
        Featured Events
      </h2>

      <div className="grid grid-cols-1 mt-10 border-b-4 pb-8 sm:w-2/3 w-full place-items-center">
        <div className="grid grid-cols-2 w-full gap-5 p-4 place-items-center text-lg">
          <button
            className={`sm:text-xl font-semibold uppercase ${
              activeTab === "upcoming"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            UPCOMING
          </button>
          <button
            className={`sm:text-xl font-semibold uppercase ${
              activeTab === "trending"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("trending")}
          >
            Past Events
          </button>
        </div>

        <div className="w-full mt-5 flex justify-end flex-wrap">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button className="border bg-red-700 text-white w-64 flex-1 sm:flex-none hover:bg-white hover:text-red-700 hover:border-red-700">
                Filter{" "}
                <span
                  className={`transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-white shadow-2xl rounded-xl w-full max-w-[100vw] sm:max-w-lg flex-1 border-2 p-4">
              <div className="w-full flex flex-wrap justify-center">
                <h2 className="text-2xl font-medium border-b-4 border-black mb-6 text-center w-2/3 uppercase pb-4 text-red-700">
                  Filter Events
                </h2>
              </div>

              {/* Filter Form */}
              <div className="grid gap-5 w-full min-h-fit p-2">
                {/* Event Name */}
                <div className="grid sm:grid-cols-3 items-center gap-4 ">
                  <Label htmlFor="name">Event Name:</Label>
                  <Input
                    id="name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="col-span-2 h-8"
                  />
                </div>

                {/* Event Category */}
                <div className="grid sm:grid-cols-3 items-center gap-4">
                  <Label htmlFor="category">Category:</Label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="col-span-2 w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">All Categories</option>
                    {(activeTab === "upcoming"
                      ? UpcomingCategories
                      : PastCategories
                    ).map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Date */}
                <div className="grid sm:grid-cols-3 items-center gap-4">
                  <Label htmlFor="doe">Date of Event:</Label>
                  <Input
                    id="doe"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="col-span-2 p-2"
                  />
                </div>

                {/* Apply Filters Button */}
                {/* <div className="w-full flex justify-center items-center p-2">
                  <button
                    className="w-2/3 border rounded-lg shadow-md py-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    Apply Filter
                  </button>
                </div> */}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <EventCard events={filteredEvents} />
    </div>
  );
}
