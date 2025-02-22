const AboutCard = () => {
    return (
        <div
            className="w-full min-h-[200vh] flex flex-col justify-evenly items-center gap-10"
        >
            <div
                className="w-[90%] md:min-w-[750px] md:w-[70%] lg:w-[80vw] min-h-[800px] h-[85vh] md:min-h-[600px] md:h-[70vh] flex flex-col md:flex-row gap-5 bg-white p-4 rounded-lg shadow-md text-center"
            >
                <div
                    className="h-full md:h-full w-auto md:min-w-[300px] md:max-w-[50%] md:w-1/2 rounded-lg"
                    style={{
                        backgroundImage: "url(/about-us/images/main-gate.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div
                    className="w-full md:w-[70%] h-full flex flex-col justify-center items-center gap-3 md:gap-5 lg:gap-8 text-black"
                >
                    <p
                        className="text-3xl lg:text-5xl font-bold text-gray-800"
                    >
                        Who We Are
                    </p>
                    <p
                        className="text-sm sm:text-base xl:text-lg text-gray-600"
                    >
                        <span className="font-bold">
                            Indian Institute of Information Technology, Nagpur (IIITN)
                        </span> is one of the 20 Indian Institutes of Information Technology established under the Public-Private Partnership Scheme by the Ministry of Education (erstwhile Ministry of Human Resource Development), Government of India. IIITN has been declared as an <span className="font-bold">“Institution of National Importance”</span> under the provisions of the <span className="underline hover:text-blue-500"><a href="/about-us/docs/iiit-ppp-act-2017.pdf" target="_blank">Indian Institute of Information Technology (Public-Private Partnership) Act, 2017</a></span>. The Institute started functioning during the year 2016-17 and Shifted to its Permanent Campus in Butibori Nagpur under the Department of Higher Education, Ministry of Education, and is supported by the Department of Higher Education, Government of Maharashtra, and Tata Consultancy Services, Mumbai as Industry Partner.
                    </p>
                    <p
                        className="text-sm sm:text-base xl:text-lg text-gray-600"
                    >
                        The Indian Institute of Information Technology, Nagpur governs by the Statutes formulated by GoI. These Statutes may be called the <span className="underline hover:text-blue-500"><a href="/about-us/docs/statute.pdf" target="_blank">Statutes of the Indian Institute of Information Technology, Nagpur, 2017</a></span>.
                    </p>
                </div>
            </div>
            <div
                className="w-[90%] md:min-w-[750px] md:w-[70%] lg:w-[80vw] min-h-[800px] h-[85vh] md:min-h-[600px] md:h-[70vh] flex flex-col-reverse md:flex-row gap-5 bg-white p-4 rounded-lg shadow-md text-center"
            >
                <div
                    className="w-full md:w-[70%] h-full flex flex-col justify-center items-center gap-5 md:gap-10 text-black"
                >
                    <p
                        className="text-2xl xs:text-3xl lg:text-5xl font-bold text-gray-800"
                    >
                        Our Mandate, Vision & Mission
                    </p>
                    <div
                        className="flex flex-col justify-center items-center gap-2 text-xs sm:text-base lg:text-lg xl:text-xl text-gray-600"
                    >
                        <p>
                            One of the main objectives of the Institute is to develop competent and capable youth imbued with the spirit of innovation and entrepreneurship with the social and environmental orientation to meet the knowledge needs of the country and provide Global Leadership in Information Technology & Allied Fields.
                        </p>
                        <p>
                            The Institute aspires to attain the status of a top-notch Institution in Information Technology and Allied Fields and to emerge as an elite Research Institution by imparting futuristic quality education of Global Standards to corroborate the status of an “Institution of National Importance”.
                        </p>
                        <p>
                            To undertake socially relevant, industry-oriented In-House Research & Development Programmes as well as to undertake cutting-edge research through Public-Private Participation in Information Technology & Allied Fields. The Institute shall endeavor to develop innovation and entrepreneurship with social and environmental orientation.
                        </p>
                    </div>
                </div>
                <div
                    className="min-h-[200px] h-full w-auto md:min-w-[300px] md:max-w-[50%] md:w-1/2 rounded-lg"
                    style={{
                        backgroundImage: "url(/about-us/images/main-gate.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </div>
        </div>
    );
}

export default AboutCard;