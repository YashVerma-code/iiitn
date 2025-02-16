import FacultyCard from "@/components/facultyCard";
import "../../css/font.css"
import "./faculty.css"

const Faculty = () => {

    return (
        <div className="max-w-[100vw] min-h-screen flex justify-center items-center flex-col overflow-x-hidden font-ubuntu bg-[#f0f0f0]">
            <div
                className="w-full h-[77vh] bg-faculty-banner bg-fixed bg-center bg-cover bg-no-repeat"
            >
                <div
                    className="w-full h-full bg-black bg-opacity-50 flex flex-col md:flex-row justify-center md:justify-around items-center gap-5 text-white px-12 lg:px-28"
                >
                    <div
                        className="w-full md:w-2/3 text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-normal"
                    >
                        <p>
                            Meet Our Esteemed Faculty
                        </p>
                        <p>
                            – The Pillars of CSE
                        </p>
                    </div>
                    <div
                        className="w-full md:w-1/2 font-normal text-sm sm:text-lg lg:text-xl text-justify"
                    >
                        Our CSE department is led by talented and experienced professors, dedicated to academic excellence and innovation. With expertise in AI, ML, Cybersecurity, and Web Development, they inspire and mentor students to excel in the ever-evolving tech world.
                    </div>
                </div>
            </div>
            <div
                className="w-full lg:min-w-[100px] xl:min-w-[1300px] lg:w-3/4 min-h-screen flex flex-col flex-wrap items-center gap-10 py-16"
            >
                <p
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase text-center"
                >
                    Head of Department
                </p>
                <div className="w-full flex flex-wrap justify-around gap-5">
                    <FacultyCard />
                </div>
                <p
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase mt-10 text-center"
                >
                    Faculty Members
                </p>
                <div className="w-full flex flex-wrap justify-around gap-x-5 gap-y-10">
                    <FacultyCard />
                    <FacultyCard />
                    <FacultyCard />
                    <FacultyCard />
                    <FacultyCard />
                    <FacultyCard />
                    <FacultyCard />
                    <FacultyCard />
                </div>
            </div>
        </div >
    );
}

export default Faculty;