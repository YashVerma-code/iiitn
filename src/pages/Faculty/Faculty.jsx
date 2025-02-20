import FacultyCard from "@/components/facultyCard";
import "../../css/font.css"
import "./faculty.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { header as bsHeader } from "@/data/bs/faculty"
import { header as eceHeader } from "@/data/ece/faculty"
import { header as cseHeader } from "@/data/cse/faculty"

const Faculty = () => {

    const header = {
        "bs": bsHeader,
        "cse": cseHeader,
        "ece": eceHeader,
    };

    const { dept } = useParams()

    const [faculties, setFaculties] = useState(null);
    const [hod, setHod] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFacultyData = async () => {
            try {
                // console.log("Server url : ",import.meta.env.VITE_SERVER_URL)
                // console.log("Dept : ",dept)
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/faculty?dept=${dept}`);
                // console.log("Response : ",response)
                // Separate HOD and faculties based on isHod
                const data = response.data.data

                const hodData = data.find((faculty) => faculty.isHod);
                const facultyList = data.filter((faculty) => !faculty.isHod);

                setHod(hodData);
                setFaculties(facultyList);

            } catch (err) {
                setError('Department not found');
            } finally {
                setLoading(false);
                // console.log("Faculties : ", faculties)
                // console.log("Server url : ",import.meta.env.VITE_SERVER_URL)
            }
        };

        fetchFacultyData();
    }, [dept]);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;


    return (
        <div className="max-w-[100vw] min-h-screen flex justify-center items-center flex-col overflow-x-hidden font-ubuntu bg-[#f0f0f0]">
            <div
                className={`w-full h-[77vh] ${header[dept].image} bg-fixed bg-center bg-cover bg-no-repeat`}
            >
                <div
                    className="w-full h-full bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300 flex flex-col md:flex-row justify-center md:justify-around items-center gap-5 text-white px-12 lg:px-28"
                >
                    <div
                        className="w-full md:w-2/3 text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-normal"
                    >
                        <p>
                            {header[dept].title1}
                        </p>
                        <p>
                            {header[dept].title2}
                        </p>
                    </div>
                    <div
                        className="w-full md:w-1/2 font-normal text-sm sm:text-lg lg:text-xl text-justify"
                    >
                        {header[dept].description}
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
                    <FacultyCard {...hod} />
                </div>
                <p
                    className="text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase mt-10 text-center"
                >
                    Faculty Members
                </p>
                <div className="w-full flex flex-wrap justify-around gap-x-5 gap-y-10">
                    {
                        faculties.map((faculty, index) => (
                            <FacultyCard key={index} {...faculty} />
                        ))
                    }
                </div>
            </div>
        </div >
    );
}

export default Faculty;