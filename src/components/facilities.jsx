import "../css/font.css"

const Facilities = () => {

    const images = [
        {
            src: "/facilities/acad.jpeg",
            title: "Academic Block"
        },
        {
            src: "/facilities/control-system1.jpg",
            title: "Control System Lab"
        },
        {
            src: "/facilities/control-system2.jpg",
            title: "Control System Lab"
        },
        {
            src: "/facilities/db.jpg",
            title: "Database Lab"
        },
        {
            src: "/facilities/dsa.jpg",
            title: "Data Structures & Algorithms Lab"
        },
        {
            src: "/facilities/gym.jpg",
            title: "Gym"
        },
        {
            src: "/facilities/library.jpg",
            title: "Library"
        },
        {
            src: "/facilities/microprocessor.jpg",
            title: "Microprocessor Lab"
        },
        {
            src: "/facilities/nano-scitech.jpg",
            title: "Nano SciTech Lab"
        },
    ]

    const imageStyle = "min-w-[200px] max-w-[70%] w-[70vw] min-h-[200px] h-full flex justify-center items-center rounded-xl overflow-hidden relative"

    const textStyle = "w-full h-full absolute flex justify-center items-center bg-black bg-opacity-50 text-2xl xl:text-3xl text-white text-center font-bold hover:opacity-0 transition-all duration-200 select-none"

    const container = "w-full min-h-[800px] h-[100vh] md:min-h-[200px] md:h-[300px] lg:h-1/3 flex flex-col md:flex-row justify-between items-center gap-5"

    return (
        <div
            className="w-full xl:w-[70vw] h-auto md:h-screen px-5 py-10 flex flex-col gap-5 font-ubuntu"
        > 
            <p
                className="w-full text-center text-4xl sm:text-6xl text-black font-bold"
            >
                Facilities
            </p>
            <div
                className={container}
            >
                <div
                    className={imageStyle}
                    style={{
                        backgroundImage: "url('/facilities/acad.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <p
                        className={textStyle}
                    >
                        Academic Block
                    </p>
                </div>
                <div
                    className={imageStyle}
                    style={{
                        backgroundImage: "url('/facilities/control-system1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <p
                        className={textStyle}
                    >
                        Control System Lab
                    </p>
                </div>
                <div
                    className={imageStyle}
                    style={{
                        backgroundImage: "url('/facilities/control-system2.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <p
                        className={textStyle}
                    >
                        Control System Lab
                    </p>
                </div>
            </div>
            <div
                className={container}
            >
                <div
                    className={imageStyle}
                    style={{
                        backgroundImage: "url('/facilities/db.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <p
                        className={textStyle}
                    >
                        Database Lab
                    </p>
                </div>
                <div
                    className={imageStyle}
                    style={{
                        backgroundImage: "url('/facilities/dsa.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <p
                        className={textStyle}
                    >
                        Data Structures & Algorithms Lab
                    </p>
                </div>
                <div
                    className={imageStyle}
                    style={{
                        backgroundImage: "url('/facilities/gym.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <p
                        className={textStyle}
                    >
                        Gym
                    </p>
                </div>
            </div>
            <div
                className={container}
            >
                <div
                    className={imageStyle}
                    style={{
                        backgroundImage: "url('/facilities/library.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <p
                        className={textStyle}
                    >
                        Library
                    </p>
                </div>
                <div
                    className={imageStyle}
                    style={{
                        backgroundImage: "url('/facilities/microprocessor.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <p
                        className={textStyle}
                    >
                        Microprocessor Lab
                    </p>
                </div>
                <div
                    className={imageStyle}
                    style={{
                        backgroundImage: "url('/facilities/nano-scitech.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <p
                        className={textStyle}
                    >
                        Nano SciTech Lab
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Facilities;