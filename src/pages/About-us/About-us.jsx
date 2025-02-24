import AboutCard from "@/components/aboutCard";
import Facilities from "@/components/facilities";
import "./about.css"

const AboutUs = () => {

    return (
        <div className="max-w-[100vw] min-h-screen flex justify-center items-center flex-col overflow-x-hidden font-ubuntu bg-[#f0f0f0]">
            <AboutCard />
            <div
                className="w-full min-h-[600px] h-screen sm:h-[50vh] flex flex-col justify-evenly items-center bg-[#002D62]"
            >
                <p
                    className="text-4xl sm:text-6xl text-white font-bold"
                >
                    Our Partners
                </p>
                <div
                    className="w-full h-[80%] sm:h-[20vh] lg:h-[30vh] flex flex-col sm:flex-row justify-evenly items-center gap-2"
                >
                    <img
                        className="min-w-[150px] w-[30%] sm:w-auto sm:h-full rounded-lg"
                        src="/partners/moe.jpg"
                        alt=""
                    />
                    <img
                        className="min-w-[150px] w-[30%] sm:w-auto sm:h-full rounded-lg"
                        src="/partners/gomh.png"
                        alt=""
                    />
                    <img
                        className="min-w-[150px] w-[30%] sm:w-auto sm:h-full rounded-lg"
                        src="/partners/tcs.jpg"
                        alt=""
                    />
                </div>
            </div>
            <Facilities/>
        </div >
    );
}

export default AboutUs;