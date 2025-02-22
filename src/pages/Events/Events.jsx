import { useState } from "react";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function EventPage({
  UpcomingEvents,
  Pastevents,
}) {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center overflow-x-hidden font-ubuntu bg-[#f0f0f0] p-6 mx-auto">
      {/* Events page header will update in future */}
      {/* <div className="w-full h-[70vh] bg-red-500 mb-5 mt-0 grid grid-cols-11 grid-rows-10 gap-4">
        <div className="col-span-5 row-span-5 border">1</div>
        <div className="col-span-3 row-span-3 col-start-6 border">3</div>
        <div className="col-span-3 row-span-3 col-start-9 border">4</div>
        <div className="col-span-6 row-span-4 col-start-6 row-start-4 border">5</div>
        <div className="col-span-5 row-span-5 row-start-6 border">6</div>
        <div className="col-span-6 row-span-3 col-start-6 row-start-8 border">7</div>
      </div> */}
      <h2 className="text-4xl font-bold w-full text-center mt-10">
        Featured Events
      </h2>
      <div className="grid grid-cols-1 mt-10 border-b-4 pb-8 sm:w-2/3 w-full place-items-center">
        <div className="grid grid-cols-2 w-full gap-5 p-4 place-items-center text-lg">
          <button
            className={`sm:text-xl font-semibold uppercase ${activeTab === "trending"
                ? "border-b-2 border-black"
                : "text-gray-500"
              }`}
            onClick={() => setActiveTab("trending")}
          >
            Past Events
          </button>
          <button
            className={`sm:text-xl font-semibold uppercase ${activeTab === "upcoming"
                ? "border-b-2 border-black"
                : "text-gray-500"
              }`}
            onClick={() => setActiveTab("upcoming")}
          >
            UPCOMING
          </button>
        </div>
        <div className="w-full mt-5 flex justify-end flex-wrap">
          <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild>
              <Button className="bg-red-700 text-white w-64 flex-1 sm:flex-none">
                Filter{" "}
                <span
                  className={`transition-transform duration-200 ${open ? "rotate-180" : ""
                    }`}
                >
                  ▼
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4 bg-white shadow-lg rounded-md w-full">
              <div className="grid gap-4">
                <div className="space-y-2">
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <label htmlFor="name">Event Name</label>
                    <input
                      id="name"
                      defaultValue=""
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <label htmlFor="doe">Date of Event</label>
                    <input
                      id="doe"
                      type="date"
                      defaultValue=""
                      className="col-span-2 h-8 p-2"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {activeTab === "upcoming" ? (
        <EventCard events={UpcomingEvents} />
      ) : (
        <EventCard events={Pastevents} />
      )}
    </div>
  );
}
