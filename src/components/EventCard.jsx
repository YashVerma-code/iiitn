import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const EventCard = ({ events }) => {
  const boxRefs = useRef([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const maxVisiblePages = 5;

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useGSAP(() => {
    gsap.killTweensOf(boxRefs.current);
    boxRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.5, //for seperate animation multiply by index *
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, [events]);

  // Logic for displaying page numbers
  let visiblePages = [];
  if (totalPages <= maxVisiblePages) {
    visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 3) {
      visiblePages = [1, 2, 3, 4, totalPages];
    } else if (currentPage >= totalPages - 2) {
      visiblePages = [
        1,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      visiblePages = [
        1,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        totalPages,
      ];
    }
  }

  return (
    <>
      <div className="sm:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 gap-y-10">
        {currentEvents.length === 0 && (
          <div className="text-center text-2xl">No Upcoming Events</div>
        )}
        {currentEvents.map((event, index) => (
          <div
          key={index}
          ref={(el) => (boxRefs.current[index] = el)}
          className="bg-white shadow-md rounded-lg flex flex-wrap flex-col md:flex-row items-start min-h-fit hover:shadow-[0px_30px_40px_-8px_rgba(6,14,58,0.16)]"
          >
            <Link to={event.link} key={index} className="w-full h-full">
              <div className="flex-1 min-h-[200px] space-y-4 flex flex-wrap justify-start items-center p-5 cursor-pointer">
                <div className="w-full min-h-fit flex flex-wrap py-2 justify-start items-center gap-2 ">
                  <p className="text-sm text-red-600 font-semibold w-full">
                    {event.category}
                  </p>
                  <h3 className="text-lg font-bold w-full">{event.title}</h3>
                </div>
                <p className="text-sm text-gray-500 flex items-center w-full sm:w-1/2 ">
                  📅 {event.startDate} to {event.endDate}
                </p>
                <p className="text-sm text-blue-600 cursor-pointer w-full sm:w-1/2 sm:text-right">
                  📍 {event.location}
                </p>
                {event.sponsor && (
                  <p className="text-sm text-green-600 w-full">
                    🎗 Sponsored by {event.sponsor}
                  </p>
                )}
                {event.coordinator && (
                  <p className="text-sm text-purple-600 w-full">
                    👤 Coordinator: {event.coordinator}
                  </p>
                )}
              </div>
          </Link>
            </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="sm:w-[70vw] w-[70vw] flex flex-wrap justify-center mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                />
              </PaginationItem>

              {visiblePages.map((page, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
};

export default EventCard;
